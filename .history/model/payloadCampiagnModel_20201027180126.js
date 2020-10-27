const mongoose = require("mongoose")

const payloadCampaignPathSchema = new mongoose.Schema({ 
    id: ObjectId,
    user: ObjectId,
    filters:{
        name:{ type: String, required: false },
        lastname:{ type: String, required: false },
        identification:{ type: String, required: false },
    }});
const payloadCampaignPath = mongoose.model('payloadCampaignPath', payloadCampaignPathSchema);

module.exports = ExportCsv