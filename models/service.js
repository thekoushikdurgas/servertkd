const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
  icon: {type: String,required: true,},
  name: {type: String,required: true,},
  desc: {type: String,required: true,},
  updated_at: {type: Date,default: Date.now,},
});
module.exports = mongoose.model("service", Schemamodel);
