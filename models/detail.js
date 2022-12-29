const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
  user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
  title: {type: String,required: true,},
  subject: {type: String,required: true,},
  link: {type: String,required: true,},
  updated_at: {type: Date,default: Date.now,},
});
module.exports = mongoose.model("detail", Schemamodel);
