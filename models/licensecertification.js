const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
    user: {type: mongoose.Schema.Types.ObjectId,ref: "user",},
    name : {type: String,required: true,},
    organization: {type: String,required: true,},
    organizationlink: {type: String,required: true,},
    credentialid: {type: String,required: true,},
    certificatelink: {type: String,required: true,},
    issuedate: {type: Date,required: true,},
    updated_at: {type: Date,default: Date.now,},
});
module.exports = mongoose.model("licensecertification", Schemamodel);