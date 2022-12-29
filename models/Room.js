const mongoose = require("mongoose");
const { Schema } = mongoose;
const UserSchema = new Schema({
  name: { type: String, required: true, },
  ownerid: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
  password: { type: String, required: true, },
  picimg: { type: String, required: true, },
  mode: { type: String, required: true, },
  authtoken: { type: String },
  members: { type: Array, default: [] },
  blockmembers: { type: Array, default: [] },
  date: { type: Date, default: Date.now, },
});
const User = mongoose.model("Room", UserSchema);
module.exports = User;