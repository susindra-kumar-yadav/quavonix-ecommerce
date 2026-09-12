import { pool } from './src/db.js';

async function run() {
  try {
    await pool.query('DELETE FROM orders');
    console.log('All orders have been cleared.');
  } catch (err) {
    console.error('Failed to clear orders:', err);
  } finally {
    process.exit(0);
  }
}

run();
