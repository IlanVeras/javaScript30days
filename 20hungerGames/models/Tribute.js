const mongoose = require("mongoose")

const tributeSchema = new mongoose.Schema({
    nameTribute: {type: String, required: true},
    age: {type: Number, required: true},
    district: {type: Number, required: true},
    skills: String,
    sex: {type: String, required: true},
    edition: {type: Number, required: true},
    condition: {type: String, required: true},
    winner: {type: Boolean, required: true},
    status: {type: String, required: true},
    wanted: Boolean,
    clicks: {type: Number, default:0}
})


module.exports = mongoose.model('Tribute', tributeSchema);