const mongoose = require("mongoose");

const textSchema = new mongoose.Schema({
  media_type: { type: String, required: true },
  title: { type: String, required: true },
  url: { type: String, required: true },
  license_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "license",
    required: true,
  },
});

module.exports = mongoose.model("text", textSchema);
