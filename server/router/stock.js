const express = require("express");
const router = express.Router();
require("../db/conn");
const Stock = require("../model/stockSchema");

router.post("/stock", async (req, res) => {
  const { stock_name, transaction_type, quantity, amount, date } = req.body;
  console.log(req.body);
  if (!stock_name || !transaction_type || !quantity || !amount) {
    return res.status(422).json({ error: "Please fill all the fields." });
  }
  try {
    const stock = new Stock({
      stock_name,
      transaction_type,
      quantity,
      amount,
      date,
    });
    await stock.save();
    res.status(201).json({ message: "Inserted Successfully." });
  } catch (error) {
    console.log(error);
  }
});

router.get("/stock", async (req, res) => {
  try {
    const stocks = await Stock.find({});
    res.status(200).json(stocks);
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
