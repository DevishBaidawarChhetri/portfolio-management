const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  stock_name: {
    type: String,
    required: true,
  },
  transaction_type: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  amount: {
    type: Number,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

const Stock = mongoose.model("STOCK", stockSchema);
module.exports = Stock;
