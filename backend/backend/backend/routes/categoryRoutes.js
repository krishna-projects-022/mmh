// routes/categoryRoutes.js
const express = require('express');
const router = express.Router();
const multer = require('multer');
const categoryController = require('../controllers/categoryController');

const upload = multer({ dest: 'uploads/categories/' });

router.post('/add', upload.single('icon'), categoryController.addCategory);
router.get('/', categoryController.getCategories);
router.put('/:id', upload.single('icon'), categoryController.updateCategory);
router.delete('/:id', categoryController.deleteCategory);

module.exports = router;