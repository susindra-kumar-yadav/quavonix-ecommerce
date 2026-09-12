-- 1. 45-Day Tracker Table
CREATE TABLE IF NOT EXISTS tracker_days (
  day_number INTEGER PRIMARY KEY,
  topic TEXT NOT NULL,
  completed BOOLEAN DEFAULT FALSE
);

-- 2. Settings Table
CREATE TABLE IF NOT EXISTS tracker_settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- 3. Users Table (Authentication)
CREATE TABLE IF NOT EXISTS users (
  id SERIAL PRIMARY KEY,
  email TEXT UNIQUE NOT NULL,
  password_hash TEXT NOT NULL,
  role TEXT DEFAULT 'user'
);

-- 4. 6-Year Roadmap Weeks Table
CREATE TABLE IF NOT EXISTS tracker_weeks (
  week_id VARCHAR(50) PRIMARY KEY,
  completed BOOLEAN DEFAULT false
);

ALTER TABLE tracker_weeks ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow all" ON tracker_weeks;
CREATE POLICY "allow all" ON tracker_weeks FOR ALL USING (true) WITH CHECK (true);

-- 5. Products Table (E-commerce / Admin Panel)
CREATE TABLE IF NOT EXISTS products (
  id SERIAL PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  quantity INTEGER NOT NULL DEFAULT 0,
  image_url TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE products ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow all" ON products;
CREATE POLICY "allow all" ON products FOR ALL USING (true) WITH CHECK (true);

-- Seed Initial Settings
INSERT INTO tracker_settings (key, value) VALUES ('showPublicly', 'false') ON CONFLICT (key) DO NOTHING;
INSERT INTO tracker_settings (key, value) VALUES ('showPhasePlan', 'false') ON CONFLICT (key) DO NOTHING;

-- 6. Orders Table
CREATE TABLE IF NOT EXISTS orders (
  id SERIAL PRIMARY KEY,
  user_email TEXT NOT NULL,
  total_price NUMERIC NOT NULL,
  status TEXT DEFAULT 'Pending',
  payment_method TEXT,
  transaction_id TEXT,
  delivery_date DATE,
  phone TEXT,
  flat_colony TEXT,
  road_highway TEXT,
  town_village TEXT,
  state TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

ALTER TABLE orders ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow all" ON orders;
CREATE POLICY "allow all" ON orders FOR ALL USING (true) WITH CHECK (true);

-- 7. Order Items Table
CREATE TABLE IF NOT EXISTS order_items (
  id SERIAL PRIMARY KEY,
  order_id INTEGER REFERENCES orders(id) ON DELETE CASCADE,
  product_name TEXT NOT NULL,
  price NUMERIC NOT NULL,
  quantity INTEGER NOT NULL
);

ALTER TABLE order_items ENABLE ROW LEVEL SECURITY;
DROP POLICY IF EXISTS "allow all" ON order_items;
CREATE POLICY "allow all" ON order_items FOR ALL USING (true) WITH CHECK (true);