const mongoose = require("mongoose");

const SegmentSchema = new mongoose.Schema({
  name: String,
  filters: Array,
  size: Number,
});

module.exports = mongoose.model("Segment", SegmentSchema);
