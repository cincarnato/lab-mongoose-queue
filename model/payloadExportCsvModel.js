const mongoose = require("mongoose")

const PayloadExportCsvSchema = new mongoose.Schema({ 
    id: ObjectId,
    user: ObjectId,
    fields:[String],
    filters:{
        name:{ type: String, required: false },
        lastname:{ type: String, required: false },
        identification:{ type: String, required: false },
    }});
const PayloadExportCsv = mongoose.model('PayloadExportCsv', PayloadExportCsvSchema);

module.exports = PayloadExportCsv