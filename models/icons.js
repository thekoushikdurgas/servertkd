const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  link: { type: String, required: true },
  name: { type: String, required: true },
  title: { type: String, required: true },
  csscontentcode: { type: String, required: true },
  svglink: { type: String, required: true },
  icontype: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("icons", Schemamodel);