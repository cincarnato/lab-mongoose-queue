const mongoose = require("mongoose")

const ExportCsvSchema = new mongoose.Schema({ 
    id: ObjectId,
    user: ObjectId,
    fields:[String],
    filters:{
        name:{ type: String, required: false },
        lastname:{ type: String, required: false },
        identification:{ type: String, required: false },
    }});
const ExportCsv = mongoose.model('ExportCsv', ExportCsvSchema);

module.exports = ExportCsv