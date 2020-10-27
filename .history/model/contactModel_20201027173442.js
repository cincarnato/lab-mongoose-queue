const mongoose = require("mongoose")

const ContactSchema = new mongoose.Schema({ id: ObjectId, name: String, lastname: String, age: Number, DNI: Number});
const Contact = mongoose.model('Contact', ContactSchema);

module.exports = Contact
