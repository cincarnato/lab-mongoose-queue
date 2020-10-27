const mongoose = require("mongoose")
const configQueue = {
    payloadModel: 'Campaign',
    options: {
        payloadRefType: mongoose.Types.UUID,
        queueCollection: 'queue',
        blockDuration: 30000,
        maxRetries: 3
    }
}

module.exports = configQueue
