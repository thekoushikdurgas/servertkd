const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  institutename: { type: String, required: true },
  degree: { type: String, required: true },
  degreestart: { type: String, required: true },
  degreeend: { type: String, required: true },
  degreelist: { type: Array, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("education", Schemamodel);
