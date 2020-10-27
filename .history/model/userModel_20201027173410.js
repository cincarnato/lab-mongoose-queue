const mongoose = require("mongoose")

const schema = new mongoose.Schema({ id: ObjectId, name: String, lastname: String, age: Number, DNI: Number});
const Campaign = mongoose.model('Campaign', schema);

module.exports = Campaign