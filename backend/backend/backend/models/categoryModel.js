// models/categoryModel.js
const db = require('../config/db');
const path = require('path');
const fs = require('fs');

class Category {
  static async findOne({ where }) {
    const [key] = Object.keys(where);
    const [value] = Object.values(where);
    const query = `SELECT * FROM categories WHERE "${key}" = $1 LIMIT 1`;
    const { rows } = await db.query(query, [value]);
    return rows[0] || null;
  }

  static async create(data) {
    const { name, description, icon_path, is_active = true } = data;
    const query = `
      INSERT INTO categories (name, description, icon_path, is_active, "createdAt", "updatedAt")
      VALUES ($1, $2, $3, $4, NOW(), NOW())
      RETURNING *
    `;
    const { rows } = await db.query(query, [name, description, icon_path, is_active]);
    return rows[0];
  }

  static async findAll() {
    const query = `SELECT * FROM categories ORDER BY "createdAt" DESC`;
    const { rows } = await db.query(query);
    return rows;
  }

  static async update(id, data) {
    const fields = Object.keys(data)
      .filter(k => data[k] !== undefined)
      .map((k, i) => `"${k}" = $${i + 1}`);
    const values = Object.values(data).filter(v => v !== undefined);
    const query = `
      UPDATE categories SET ${fields.join(', ')}, "updatedAt" = NOW()
      WHERE id = $${fields.length + 1}
      RETURNING *
    `;
    const { rows } = await db.query(query, [...values, id]);
    return rows[0];
  }

  static async delete(id) {
    const query = `DELETE FROM categories WHERE id = $1 RETURNING *`;
    const { rows } = await db.query(query, [id]);
    return rows[0];
  }

  static async deleteIconFile(icon_path) {
    if (!icon_path) return;
    const filePath = path.join(__dirname, '..', icon_path);
    if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
  }
}

module.exports = Category;