// routes/sellerRoutes.js
const express = require("express");
const router = express.Router();
const SellerProfile = require("../models/sellerProfileModel");

router.get("/pending", async (req, res) => {
  try {
    const result = await SellerProfile.getPendingSellers();
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.patch("/approve/:id", async (req, res) => {
  try {
    const result = await SellerProfile.approveSeller(req.params.id);
    res.json({ success: true, data: result });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

router.delete("/delete/:id", async (req, res) => {
  try {
    await SellerProfile.deleteSeller(req.params.id);
    res.json({ success: true, message: "Deleted" });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
});

module.exports = router;