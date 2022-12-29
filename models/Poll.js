const mongoose = require("mongoose");
const { Schema } = mongoose;
const Schemamodel = new Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "user" },
    question: { type: String, default: false },
    answers: { type: Array, default: false },
    poll: { type: Array, required: true },
    result: { type: String, required: true },
    updated_at: { type: Date, default: Date.now },
});
module.exports = mongoose.model("polls", Schemamodel);