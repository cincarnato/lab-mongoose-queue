const mongoose = require("mongoose")

const schema = new mongoose.Schema({ id: ObjectId, title: String, message: String, pathBatch: String });
const Campaign = mongoose.model('Campaign', schema);

module.exports = Campaign
