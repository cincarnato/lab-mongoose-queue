const mongoose = require("mongoose")

const schema = new mongoose.Schema({user: String, name: String, size: Number, time: Number});
const Campaign = mongoose.model('Campaign', schema);

module.exports = Campaign
