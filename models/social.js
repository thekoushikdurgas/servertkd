const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
  title: {type: String,required: true,},
  title1: {type: String,required: true,},
  icon: {type: String,required: true,},
  link: {type: String,default: "http://google.com",},
  updated_at: {type: Date,default: Date.now,},
});
module.exports = mongoose.model("social", Schemamodel);