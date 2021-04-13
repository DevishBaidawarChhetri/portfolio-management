const express = require("express");
const router = express.Router();
const Stock = require("../model/stockSchema");
const auth = require("../middleware/auth");

router.post("/stock", auth, async (req, res) => {
  const {
    userId,
    stock_name,
    transaction_type,
    quantity,
    amount,
    date,
  } = req.body;
  // console.log(req.body);
  if (!userId || !stock_name || !transaction_type || !quantity || !amount) {
    return res.status(422).json({ error: "Please fill all the fields." });
  }
  try {
    const stock = new Stock({
      userId,
      stock_name,
      transaction_type,
      quantity,
      amount,
      date,
    });
    await stock.save();
    res.status(201).json({ message: "Transaction Successful!" });
  } catch (error) {
    console.error(error);
  }
});

router.get("/stocks/:id", async (req, res) => {
  // console.log(req.params.id);
  try {
    const stocks = await Stock.find({ userId: req.params.id });
    res.status(200).json({ data: stocks });
  } catch (error) {
    console.error(error);
  }
});

module.exports = router;
