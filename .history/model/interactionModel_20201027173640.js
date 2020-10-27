const mongoose = require("mongoose")

const InteractionSchema = new mongoose.Schema({ id: ObjectId, contact: ObjectId, campaign: ObjectId, message: String });
const Interaction = mongoose.model('Interaction', InteractionSchema);

module.exports = Interaction


