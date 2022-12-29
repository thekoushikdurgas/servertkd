const mongoose = require("mongoose");
const { Schema } = mongoose;

const Schemamodel = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    bloodgroup: { type: String, required: true },
    type: { type: String, required: true },
    disease: { type: String, required: true },
    address: { type: String, required: true },
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("blood", Schemamodel);
