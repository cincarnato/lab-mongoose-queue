const mongoose = require("mongoose")
const {MongooseQueue} = require('mongoose-queue');
const configQueue = require('./configQueue')

const campaignQueue = new MongooseQueue(configQueue.payloadModel, 'producer', configQueue.options)

module.exports = campaignQueue
