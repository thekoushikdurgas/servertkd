const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
    profile: {type: String,required: true,},
    organization: {type: String,required: true,},
    organizationlink: {type: String,required: true,},
    location: {type: String,required: true,},
    locationlink: {type: String,required: true,},
    description: {type: String,required: true,},
    certificatelink: {type: String,required: true,},
    startdate: {type: Date,required: true,},
    enddate: {type: Date,required: true,},
    updated_at: {type: Date,default: Date.now,},
});
module.exports = mongoose.model("internship", Schemamodel);