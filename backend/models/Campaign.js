const mongoose = require("mongoose");

const CampaignSchema = new mongoose.Schema({
  name: String,
  messageTemplate: String,
  segmentId: mongoose.Schema.Types.ObjectId,
  sent: Number,
  failed: Number,
});

module.exports = mongoose.model("Campaign", CampaignSchema);
