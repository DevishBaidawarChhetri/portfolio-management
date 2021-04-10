const express = require("express");
const router = express.Router();
const StockProvider = require("../model/stockProviderSchema");

router.post("/name", async (req, res) => {
  const { stock_provider } = req.body;
  console.log(stock_provider);
  if (!stock_provider) {
    return res.status(422).json({
      error: "Fill empty field.",
    });
  }
  try {
    const stockProvider = new StockProvider({
      stock_provider,
    });
    await stockProvider.save();
    res.status(201).json({
      message: "Inserted Successfully",
    });
  } catch (error) {
    console.error(error);
  }
});

router.get("/names", async (req, res) => {
  try {
    const stockNames = await StockProvider.find({});
    res.status(200).json({data: stockNames});
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
