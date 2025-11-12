// models/sellerProfileModel.js
const db = require("../config/db");

class SellerProfile {
  // Step 1: Partial save
  static async upsertPartial(data) {
    const { user_id, gst_number, pan_number, business_name, gst_file_path, pan_file_path } = data;

    const query = `
      INSERT INTO seller_profiles (
        user_id, gst_number, pan_number, business_name, 
        gst_file_path, pan_file_path, approve
      ) VALUES ($1, $2, $3, $4, $5, $6, FALSE)
      ON CONFLICT (user_id) 
      DO UPDATE SET
        gst_number = EXCLUDED.gst_number,
        pan_number = EXCLUDED.pan_number,
        business_name = EXCLUDED.business_name,
        gst_file_path = EXCLUDED.gst_file_path,
        pan_file_path = EXCLUDED.pan_file_path,
        approve = EXCLUDED.approve
      RETURNING id
    `;

    const values = [user_id, gst_number, pan_number, business_name, gst_file_path, pan_file_path];
    const result = await db.query(query, values);
    return result.rows[0].id;
  }

  // Step 2: Full save
  static async upsertFull(data) {
    const {
      user_id, gst_number, pan_number, business_name,
      gst_file_path, pan_file_path, store_name, business_category,
      location, phone_no, email_id, role, store_logo_path
    } = data;

    const query = `
      INSERT INTO seller_profiles (
        user_id, gst_number, pan_number, business_name,
        gst_file_path, pan_file_path, store_name, business_category,
        location, phone_no, email_id, role, store_logo_path, approve
      ) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, FALSE)
      ON CONFLICT (user_id) 
      DO UPDATE SET
        gst_number = EXCLUDED.gst_number,
        pan_number = EXCLUDED.pan_number,
        business_name = EXCLUDED.business_name,
        gst_file_path = EXCLUDED.gst_file_path,
        pan_file_path = EXCLUDED.pan_file_path,
        store_name = EXCLUDED.store_name,
        business_category = EXCLUDED.business_category,
        location = EXCLUDED.location,
        phone_no = EXCLUDED.phone_no,
        email_id = EXCLUDED.email_id,
        role = EXCLUDED.role,
        store_logo_path = EXCLUDED.store_logo_path,
        approve = EXCLUDED.approve
      RETURNING id
    `;

    const values = [
      user_id, gst_number, pan_number, business_name,
      gst_file_path, pan_file_path, store_name, business_category,
      location, phone_no, email_id, role, store_logo_path
    ];

    const result = await db.query(query, values);
    return result.rows[0].id;
  }

  // ✅ Get all pending sellers
  static async getPendingSellers() {
    const query = `SELECT * FROM seller_profiles WHERE approve = FALSE`;
    const result = await db.query(query);
    return result.rows;
  }

  // ✅ Approve seller
  static async approveSeller(id) {
    const query = `UPDATE seller_profiles SET approve = TRUE WHERE id = $1 RETURNING *`;
    const result = await db.query(query, [id]);
    return result.rows[0];
  }

  // ✅ Delete seller
  static async deleteSeller(id) {
    const query = `DELETE FROM seller_profiles WHERE id = $1`;
    await db.query(query, [id]);
  }
}

module.exports = SellerProfile;
