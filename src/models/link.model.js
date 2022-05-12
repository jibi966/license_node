const mongoose = require("mongoose");

const linkSchema = new mongoose.Schema({
  note: { type: String, required: true },
  url: { type: String, required: true },
  license_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "license",
    required: true,
  },
});

module.exports = mongoose.model("link", linkSchema);
