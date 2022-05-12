const mongoose = require("mongoose");

const identifierScheme = new mongoose.Schema({
  identifier: { type: String, required: true },
  scheme: { type: String, required: true },
  license_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "license",
    required: true,
  },
});

module.exports = mongoose.model("identifier", identifierScheme);
