const Campaign = require("../models/Campaign");

const createCampaign = async (req, res) => {
  const { name, messageTemplate, segmentId } = req.body;

  const campaign = new Campaign({
    name,
    messageTemplate,
    segmentId,
    sent: 0,
    failed: 0,
  });
  await campaign.save();

  res.json({ success: true, campaignId: campaign._id });
};

module.exports = { createCampaign };
