// config/db.js
const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: process.env.DB_PORT,
});

pool.on('connect', async () => {
  console.log('PostgreSQL Connected!');
  await createTables();
});

async function createTables() {
  const queries = [
    // DROP & RECREATE to fix id type
    `DROP TABLE IF EXISTS categories CASCADE;`,
    `
    CREATE TABLE categories (
      id BIGSERIAL PRIMARY KEY,
      name VARCHAR(255) NOT NULL UNIQUE,
      description TEXT,
      icon_path VARCHAR(512),
      is_active BOOLEAN DEFAULT TRUE,
      "createdAt" TIMESTAMP DEFAULT NOW(),
      "updatedAt" TIMESTAMP DEFAULT NOW()
    );
    `,
  ];

  for (const query of queries) {
    try {
      await pool.query(query);
    } catch (err) {
      console.error('Table error:', err.message);
    }
  }
  console.log('Categories table ready with BIGSERIAL!');
}

module.exports = pool;