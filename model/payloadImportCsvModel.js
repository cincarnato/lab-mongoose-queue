const mongoose = require("mongoose")

const ImportCsvSchema = new mongoose.Schema({ id: ObjectId, user: ObjectId, path:String});
const ImportCsv = mongoose.model('ImportCsv', ImportCsvSchema);

module.exports = ImportCsv