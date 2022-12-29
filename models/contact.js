const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone:{ type: String },
  subject:{ type: String },
  choose:{ type: String },
  message: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("contact", Schemamodel);