const mongoose = require("mongoose");

const CustomerSchema = new mongoose.Schema({
  name: String,
  email: String,
  totalSpending: Number,
  visits: Number,
  lastVisitDate: Date,
});

module.exports = mongoose.model("Customer", CustomerSchema);
