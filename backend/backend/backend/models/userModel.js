const db = require('../config/db');

class User {
  static async findByEmail(email) {
    try {
      const result = await db.query('SELECT * FROM users WHERE email = $1', [email]);
      return result.rows[0] || null;
    } catch (err) {
      throw err;
    }
  }

  static async findById(id) {
    try {
      const result = await db.query(
        'SELECT id, name, email, created_at, updated_at FROM users WHERE id = $1',
        [id]
      );
      return result.rows[0] || null;
    } catch (err) {
      throw err;
    }
  }

  static async create({ name, email, password }) {
    try {
      const result = await db.query(
        'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id',
        [name, email, password]
      );
      return result.rows[0].id;
    } catch (err) {
      throw err;
    }
  }
}

module.exports = User;