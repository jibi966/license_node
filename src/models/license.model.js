const mongoose = require("mongoose");

const licenseScheme = new mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  superseded_by: { type: String },
  keywords: [{ type: String }],
});

module.exports = mongoose.model("license", licenseScheme);
