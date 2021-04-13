const express = require("express");
const router = express.Router();
const StockProvider = require("../model/stockProviderSchema");
const auth = require("../middleware/auth");

router.get("/dashboard", auth, async (req, res) => {
  try {
    const stockNames = await StockProvider.find({});
    res.status(200).json({ userId: req.rootUser._id, data: stockNames });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
