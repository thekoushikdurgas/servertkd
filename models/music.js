const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  title: { type: String, required: true },
  artist: { type: String, required: true },
  image: { type: String, required: true },
  audio_file: { type: String, required: true },
  audio_link: { type: String, required: true },
  language: { type: String, required: true },
  typeaudio: { type: String, required: true },
  updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("music", Schemamodel);