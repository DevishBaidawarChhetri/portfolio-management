const mongoose = require("mongoose");

const stockSchema = new mongoose.Schema({
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
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "USER",
  },
});

const Stock = mongoose.model("STOCK", stockSchema);
module.exports = Stock;
