const express = require("express");
const router = express.Router();
const { addCustomer } = require("../controllers/customerController");
const { createSegment } = require("../controllers/segmentController");
const { createCampaign } = require("../controllers/campaignController");

router.post("/customers", addCustomer);
router.post("/segments", createSegment);
router.post("/campaigns", createCampaign);

module.exports = router;
