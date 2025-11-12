// controllers/categoryController.js
const Category = require('../models/categoryModel');

exports.addCategory = async (req, res) => {
  try {
    const { name, description, is_active } = req.body;
    const iconFile = req.file;

    if (!name?.trim()) {
      return res.status(400).json({ success: false, message: 'Category name is required' });
    }

    const existing = await Category.findOne({ where: { name: name.trim() } });
    if (existing) {
      return res.status(400).json({ success: false, message: 'Category already exists' });
    }

    const icon_path = iconFile ? `/uploads/${iconFile.filename}` : null;

    const category = await Category.create({
      name: name.trim(),
      description: description?.trim() || null,
      icon_path,
      is_active: is_active === 'true' || is_active === true,
    });

    res.status(201).json({
      success: true,
      message: 'Category added successfully',
      data: category,
    });
  } catch (err) {
    console.error('Add category error:', err);
    res.status(500).json({ success: false, message: 'Server error' });
  }
};

exports.getCategories = async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.json({ success: true, data: categories });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.updateCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, description, is_active } = req.body;
    const iconFile = req.file;

    const old = await Category.findOne({ where: { id } });
    if (!old) return res.status(404).json({ success: false, message: "Not found" });

    const updateData = { name, description, is_active };
    if (iconFile) {
      updateData.icon_path = `/uploads/${iconFile.filename}`;
      if (old.icon_path) await Category.deleteIconFile(old.icon_path);
    }

    const category = await Category.update(id, updateData);
    res.json({ success: true, data: category });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

exports.deleteCategory = async (req, res) => {
  try {
    const { id } = req.params;
    const category = await Category.findOne({ where: { id } });
    if (!category) return res.status(404).json({ success: false, message: "Not found" });

    if (category.icon_path) await Category.deleteIconFile(category.icon_path);
    await Category.delete(id);

    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};