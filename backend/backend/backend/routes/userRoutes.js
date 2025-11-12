const express = require('express');
const router = express.Router();
const { register, login, completeProfile } = require('../controllers/userController');
const { protect } = require('../middleware/auth');
const multer = require('multer');
const path = require('path');

// Multer config
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${Date.now()}-${file.fieldname}${ext}`);
  },
});
const upload = multer({ storage });

router.post('/register', register);
router.post('/login', login);

// Apply multer + protect + handler
router.post(
  '/complete-profile',
  protect,
  upload.fields([
    { name: 'gstFile', maxCount: 1 },
    { name: 'panFile', maxCount: 1 },
    { name: 'storeLogo', maxCount: 1 }
  ]),
  completeProfile
);

module.exports = router;