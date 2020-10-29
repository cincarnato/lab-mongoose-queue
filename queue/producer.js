const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/lab-queue', {useNewUrlParser: true});
const {MongooseQueue} = require('mongoose-queue');
const configQueue = require('./configQueue')

//clase para agregar jobs a la cola
//tiene que recibir como parametro el payload previamente guardado: payload.save() 
class QueueProducer {

    constructor(){
        this.queue = new MongooseQueue(configQueue.payloadModel, 'producer', configQueue.options)
    }

    addJobToQueue(payload){     

        this.queue.add(payload, (err, jobId) => {
            if (err) {
                console.error(err)
            }
    
            //Al confirmar que el job se agregar con exito, retornamos un mensaje de exito
            console.log("Payload Type: ",payload.type," Job added id: ", jobId)
        })
    }
}

module.exports = new QueueProducer()


