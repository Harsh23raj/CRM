const Customer = require("../models/Customer");

const addCustomer = async (req, res) => {
  const customer = new Customer(req.body);
  await customer.save();
  res.json({ success: true, message: "Customer added successfully!" });
};

module.exports = { addCustomer };
