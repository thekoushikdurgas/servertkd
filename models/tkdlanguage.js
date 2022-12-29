const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
    title: {type: String,required: true,},
    value: {type: Number,required: true,},
    readvalue: {type: Number,required: true,},
    writevalue: {type: Number,required: true,},
    speakvalue: {type: Number,required: true,},
    updated_at: {type: Date,default: Date.now,},
});
module.exports = mongoose.model("tkdlanguage", Schemamodel);