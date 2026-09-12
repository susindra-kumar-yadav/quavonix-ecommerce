import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { pool } from './db.js';

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

const JWT_SECRET = process.env.JWT_SECRET || 'fallback_secret';

// Middleware to verify token
const authenticateJWT = (req: express.Request, res: express.Response, next: express.NextFunction) => {
  const authHeader = req.headers.authorization;
  if (authHeader) {
    const token = authHeader.split(' ')[1];
    if (!token) {
      return res.sendStatus(401);
    }
    jwt.verify(token, JWT_SECRET, (err, user) => {
      if (err) {
        return res.sendStatus(403);
      }
      (req as any).user = user;
      next();
    });
  } else {
    res.sendStatus(401);
  }
};

// 1. POST /api/login
app.post('/api/login', async (req, res) => {
  const { email, password } = req.body;
  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASS) {
    const token = jwt.sign({ email, role: 'admin' }, JWT_SECRET, { expiresIn: '1d' });
    return res.json({ token, role: 'admin' });
  }

  try {
    const userResult = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    if (userResult.rows.length > 0) {
      const user = userResult.rows[0];
      const match = await bcrypt.compare(password, user.password_hash);
      if (match) {
        const token = jwt.sign({ email, role: 'user' }, JWT_SECRET, { expiresIn: '1d' });
        return res.json({ token, role: 'user' });
      }
    }
    res.status(401).json({ error: 'Invalid credentials' });
  } catch (error) {
    console.error('Login error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 1.5 POST /api/signup
app.post('/api/signup', async (req, res) => {
  const { email, password } = req.body;
  try {
    const existing = await pool.query('SELECT id FROM users WHERE email = $1', [email]);
    if (existing.rows.length > 0) {
      return res.status(400).json({ error: 'Email already exists' });
    }
    const hash = await bcrypt.hash(password, 10);
    await pool.query('INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3)', [email, hash, 'user']);

    const token = jwt.sign({ email, role: 'user' }, JWT_SECRET, { expiresIn: '1d' });
    res.json({ token, role: 'user' });
  } catch (error) {
    console.error('Signup error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 2. GET /api/state
app.get('/api/state', async (req, res) => {
  try {
    const daysResult = await pool.query('SELECT day_number, completed FROM tracker_days');
    const settingsResult = await pool.query('SELECT value FROM tracker_settings WHERE key = $1', ['showPublicly']);
    const planResult = await pool.query('SELECT value FROM tracker_settings WHERE key = $1', ['showPhasePlan']);

    const completedDays = daysResult.rows.filter((r: any) => r.completed).map((r: any) => r.day_number);
    let showPublicly = false;
    if (settingsResult.rows.length > 0) {
      showPublicly = settingsResult.rows[0].value === 'true';
    }

    let showPhasePlan = false;
    if (planResult.rows.length > 0) {
      showPhasePlan = planResult.rows[0].value === 'true';
    }
    const weeksResult = await pool.query('SELECT week_id FROM tracker_weeks WHERE completed = true');
    const completedWeeks = weeksResult.rows.map((r: any) => r.week_id);

    res.json({ completedDays, completedWeeks, showPublicly, showPhasePlan });
  } catch (error) {
    console.error('Error fetching state:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3. POST /api/toggle-day
app.post('/api/toggle-day', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  const { dayNum } = req.body;
  try {
    const result = await pool.query('SELECT completed FROM tracker_days WHERE day_number = $1', [dayNum]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Day not found' });
    }
    const currentCompleted = result.rows[0].completed;
    await pool.query('UPDATE tracker_days SET completed = $1 WHERE day_number = $2', [!currentCompleted, dayNum]);
    res.json({ success: true, newStatus: !currentCompleted });
  } catch (error) {
    console.error('Error toggling day:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3.5 POST /api/toggle-week
app.post('/api/toggle-week', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  const { weekId } = req.body;
  try {
    const query = `
      INSERT INTO tracker_weeks (week_id, completed)
      VALUES ($1, true)
      ON CONFLICT (week_id)
      DO UPDATE SET completed = NOT tracker_weeks.completed
      RETURNING completed;
    `;
    const result = await pool.query(query, [weekId]);
    res.json({ success: true, newStatus: result.rows[0].completed });
  } catch (error) {
    console.error('Error toggling week:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 3.6 POST /api/clear-weeks
app.post('/api/clear-weeks', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  try {
    await pool.query('DELETE FROM tracker_weeks');
    res.json({ success: true });
  } catch (error) {
    console.error('Error clearing weeks:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 4. POST /api/toggle-visibility
app.post('/api/toggle-visibility', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  const { showPublicly } = req.body;
  try {
    await pool.query('UPDATE tracker_settings SET value = $1 WHERE key = $2', [showPublicly.toString(), 'showPublicly']);
    res.json({ success: true, showPublicly });
  } catch (error) {
    console.error('Error toggling visibility:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 5. POST /api/toggle-phase-plan
app.post('/api/toggle-phase-plan', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') {
    return res.status(403).json({ error: 'Forbidden: Admins only' });
  }
  const { showPhasePlan } = req.body;
  try {
    await pool.query('UPDATE tracker_settings SET value = $1 WHERE key = $2', [showPhasePlan.toString(), 'showPhasePlan']);
    res.json({ success: true, showPhasePlan });
  } catch (error) {
    console.error('Error toggling phase plan:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 6. GET /api/products
app.get('/api/products', async (req, res) => {
  try {
    const result = await pool.query('SELECT * FROM products ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 7. POST /api/products
app.post('/api/products', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { name, price, quantity, image_url } = req.body;
  try {
    const result = await pool.query(
      'INSERT INTO products (name, price, quantity, image_url) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, price, quantity, image_url]
    );
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error adding product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 8. PUT /api/products/:id
app.put('/api/products/:id', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { id } = req.params;
  const { name, price, quantity, image_url } = req.body;
  try {
    const result = await pool.query(
      'UPDATE products SET name = $1, price = $2, quantity = $3, image_url = $4 WHERE id = $5 RETURNING *',
      [name, price, quantity, image_url, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error updating product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 9. DELETE /api/products/:id
app.delete('/api/products/:id', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { id } = req.params;
  try {
    const result = await pool.query('DELETE FROM products WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json({ success: true, deleted: result.rows[0] });
  } catch (error) {
    console.error('Error deleting product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 9.5 PUT /api/admin/products/:id/restock
app.put('/api/admin/products/:id/restock', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { id } = req.params;
  const { addedQuantity } = req.body;
  if (!addedQuantity || isNaN(addedQuantity) || addedQuantity <= 0) {
    return res.status(400).json({ error: 'Invalid quantity' });
  }
  try {
    const result = await pool.query(
      'UPDATE products SET quantity = quantity + $1 WHERE id = $2 RETURNING *',
      [addedQuantity, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Product not found' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Error restocking product:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 10. POST /api/checkout
app.post('/api/checkout', authenticateJWT, async (req, res) => {
  const { cart, payment_method, transaction_id, phone, flat_colony, road_highway, town_village, state } = req.body;
  const email = (req as any).user.email;
  if (!cart || cart.length === 0) return res.status(400).json({ error: 'Cart is empty' });

  let total_price = 0;
  cart.forEach((item: any) => {
    total_price += item.price * item.quantity;
  });

  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // Check inventory
    for (const item of cart) {
      const pRes = await client.query('SELECT quantity, name FROM products WHERE id = $1 FOR UPDATE', [item.id || item.product_id]);
      if (pRes.rows.length === 0) {
        throw new Error(`Product ${item.name} not found`);
      }
      const stock = pRes.rows[0].quantity;
      if (stock < item.quantity) {
        throw new Error(`Not enough stock for ${pRes.rows[0].name}. Only ${stock} left.`);
      }
      // Deduct stock
      await client.query('UPDATE products SET quantity = quantity - $1 WHERE id = $2', [item.quantity, item.id || item.product_id]);
    }

    const orderResult = await client.query(
      'INSERT INTO orders (user_email, total_price, payment_method, transaction_id, phone, flat_colony, road_highway, town_village, state) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9) RETURNING id',
      [email, total_price, payment_method || 'Cash on Delivery', transaction_id || null, phone || null, flat_colony || null, road_highway || null, town_village || null, state || null]
    );
    const orderId = orderResult.rows[0].id;

    for (const item of cart) {
      await client.query(
        'INSERT INTO order_items (order_id, product_name, price, quantity) VALUES ($1, $2, $3, $4)',
        [orderId, item.product_name || item.name, item.price, item.quantity]
      );
    }
    
    await client.query('COMMIT');
    res.json({ message: 'Order Placed', orderId });
  } catch (error: any) {
    await client.query('ROLLBACK');
    console.error('Checkout error:', error);
    res.status(400).json({ error: error.message || 'Failed to place order' });
  } finally {
    client.release();
  }
});

// 12. GET /api/my-orders
app.get('/api/my-orders', authenticateJWT, async (req, res) => {
  const email = (req as any).user.email;
  try {
    const result = await pool.query("SELECT * FROM orders WHERE user_email = $1 AND status != 'Admin Cancelled' ORDER BY created_at DESC", [email]);
    res.json(result.rows);
  } catch (error) {
    console.error('Fetch my orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 11.5 PUT /api/my-orders/:id/cancel
app.put('/api/my-orders/:id/cancel', authenticateJWT, async (req, res) => {
  const email = (req as any).user.email;
  const { id } = req.params;
  try {
    const result = await pool.query(
      'UPDATE orders SET status = $1 WHERE id = $2 AND user_email = $3 AND status = $4 RETURNING *',
      ['Cancelled', id, email, 'Pending']
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Order not found or cannot be cancelled' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Cancel order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});


// 12. GET /api/admin/orders
app.get('/api/admin/orders', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  try {
    const result = await pool.query("SELECT * FROM orders WHERE status != 'Admin Cancelled' ORDER BY created_at DESC");
    res.json(result.rows);
  } catch (error) {
    console.error('Fetch admin orders error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

// 13. PUT /api/admin/orders/:id
app.put('/api/admin/orders/:id', authenticateJWT, async (req, res) => {
  if ((req as any).user.role !== 'admin') return res.status(403).json({ error: 'Forbidden' });
  const { id } = req.params;
  const { status, delivery_date } = req.body;
  try {
    const result = await pool.query(
      'UPDATE orders SET status = $1, delivery_date = $2 WHERE id = $3 RETURNING *',
      [status, delivery_date || null, id]
    );
    if (result.rows.length === 0) return res.status(404).json({ error: 'Order not found' });
    res.json(result.rows[0]);
  } catch (error) {
    console.error('Update order error:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.listen(port, () => {
  console.log(`Backend server listening at http://localhost:${port}`);
});