import { pool } from './src/db.js';

async function run() {
  try {
    await pool.query('ALTER TABLE orders ADD COLUMN IF NOT EXISTS transaction_id TEXT;');
    console.log('Migration successful');
  } catch (err) {
    console.error('Migration failed:', err);
  } finally {
    process.exit(0);
  }
}

run();
