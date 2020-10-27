const mongoose = require("mongoose")

const PayloadInteractionSchema = new mongoose.Schema({ 
    id: ObjectId,
    campaign: ObjectId
})    
const PayloadInteraction = mongoose.model('PayloadInteraction', PayloadInteractionSchema);

module.exports = PayloadInteraction