const mongoose = require("mongoose");

const othernameSchema = new mongoose.Schema({
  name: { type: String, required: true },
  note: { type: String, required: true },
  license_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "license",
    required: true,
  },
});

module.exports = mongoose.model("othername", othernameSchema);
