const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  symbol: { type: String, required: true },
  name: { type: String, required: true },
  symbolnative: { type: String, required: true },
  decimaldigits: { type: String, required: true },
  rounding: { type: String, required: true },
  code: { type: String, required: true },
  nameplural: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("currentacy", Schemamodel);