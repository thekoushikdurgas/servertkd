const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  name: { type: String, required: true },
  myprojectpic: { type: String, required: true },
  facebook: { type: String, required: true },
  twitter: { type: String, required: true },
  linkedin: { type: String, required: true },
  instagram: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("friends", Schemamodel);