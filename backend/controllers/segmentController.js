const Segment = require("../models/Segment");
const Customer = require("../models/Customer");

const createSegment = async (req, res) => {
  const { name, filters } = req.body;

  let query = {};
  filters.forEach(({ field, operator, value }) => {
    query[field] = { [`$${operator}`]: value };
  });

  const customers = await Customer.find(query);
  const segment = new Segment({ name, filters, size: customers.length });
  await segment.save();

  res.json({ success: true, size: customers.length, segmentId: segment._id });
};

module.exports = { createSegment };
