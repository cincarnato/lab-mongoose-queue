const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/lab-queue', {useNewUrlParser: true});
const {MongooseQueue} = require('mongoose-queue');
const configQueue = require('./configQueue')
const campaignModel = require('./../model/campaignModel')
const randomNumber = require('./../utils/randomNumber')
const randomString = require('./../utils/randomString')


//funcion para instanciar el queue, pasarle el payloadModel
const campaignQueue = new MongooseQueue(configQueue.payloadModel, 'producer', configQueue.options)

//Se generan varios Jobs y se agregan a la Queue
for (let i = 0; i < 20; i++) {
    //funcion para generar la cola, pasarle el payload
    //Creamos una registro de campaña y luego agregamos un Job a la queue
    let payload = new campaignModel(
        {
            user: randomString(10),
            name: randomString(10),
            size: randomNumber(4)
        }
    )
    

    //Agregamos a la Queue una campaña que debe ser procesada "de forma asincronica"
    campaignQueue.add(payload, (err, jobId) => {
        if (err) {
            console.error(err)
        }

        //Al confirmar que el job se agregar con exito, retornamos un mensaje de exito
        console.log("Job added id: ", jobId)
    })
}
