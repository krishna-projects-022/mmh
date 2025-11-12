const User = require('../models/userModel');
const SellerProfile = require('../models/sellerProfileModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const db = require('../config/db');

// ---------- JWT ----------
const generateToken = (id) =>
  jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: process.env.JWT_EXPIRES_IN });

/* ---------- REGISTER ---------- */
exports.register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    const existing = await User.findByEmail(email);
    if (existing) return res.status(400).json({ success: false, message: 'User already exists' });

    const userId = await User.create({ name, email, password });
    const token = generateToken(userId);

    res.status(201).json({
      success: true,
      data: { token, user: await User.findById(userId) },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

/* ---------- LOGIN ---------- */
exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    // Find user
    const user = await User.findByEmail(email);
    if (!user) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    // DIRECT COMPARE (NO HASHING)
    if (user.password !== password) {
      return res.status(401).json({ success: false, message: 'Invalid credentials' });
    }

    const token = generateToken(user.id);

    // Get role from seller_profiles
    const profileRes = await db.query(
      'SELECT role FROM seller_profiles WHERE user_id = $1',
      [user.id]
    );
    const role = profileRes.rows[0]?.role || null;

    res.json({
      success: true,
      data: {
        token,
        user: { id: user.id, email: user.email, name: user.name },
        role,
      },
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

/* ---------- COMPLETE PROFILE ----------
   NOTE: this is a **plain function**, NOT an array.
   Multer middleware is applied in the route file.
*/
exports.completeProfile = async (req, res) => {
  try {
    const userId = req.user.id;               // from protect middleware

    const {
      gstNumber, panNumber, businessName,
      storeName, businessCategory, location,
      phoneNo, emailID, role
    } = req.body;


    const gstFilePath   = req.files?.gstFile?.[0]?.path   || null;
    const panFilePath   = req.files?.panFile?.[0]?.path   || null;
    const storeLogoPath = req.files?.storeLogo?.[0]?.path || null;

    // ---------- STEP 1: Only business info ----------
    if (gstNumber && panNumber && businessName && !storeName) {
      const partialData = {
        user_id: userId,
        gst_number: gstNumber,
        pan_number: panNumber,
        business_name: businessName,
        gst_file_path: gstFilePath,
        pan_file_path: panFilePath,
      };

      await SellerProfile.upsertPartial(partialData);  // <-- Use upsertPartial
      return res.json({ success: true, message: 'Business info saved' });
    }

    // ---------- STEP 2: Full profile ----------
    if (!storeName || !role) {
      return res.status(400).json({ success: false, message: 'Store name and role are required' });
    }

    const fullData = {
      user_id: userId,
      gst_number: gstNumber,
      pan_number: panNumber,
      business_name: businessName,
      gst_file_path: gstFilePath,
      pan_file_path: panFilePath,
      store_name: storeName,
      business_category: businessCategory,
      location,
      phone_no: phoneNo,
      email_id: emailID,
      role,
      store_logo_path: storeLogoPath,
    };

    const profileId = await SellerProfile.upsertFull(fullData);  // <-- Use upsertFull
    res.json({ success: true, message: 'Profile completed', data: { profileId } });
  } catch (err) {
    console.error(err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};