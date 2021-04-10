const mongoose = require("mongoose");

const stockProviderSchema = new mongoose.Schema({
  stock_provider: {
    type: String,
    required: true,
  },
});

const StockProvider = mongoose.model("STOCK_PROVIDER", stockProviderSchema);
module.exports = StockProvider;
