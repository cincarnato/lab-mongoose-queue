const mongoose = require("mongoose")
mongoose.connect('mongodb://localhost:27017/lab-queue', {useNewUrlParser: true});
const {MongooseQueue} = require('mongoose-queue');
const configQueue = require('./configQueue')
const randomNumber = require('./../utils/randomNumber')
const randomString = require('./../utils/randomString')
const campaignModel = require('./../model/campaignModel')

class QueueProducer {

    addJobToQueue(payload){
        const queue = new MongooseQueue(payloadModel, 'producer', configQueue.options)
        queue.add(payload, (err, jobId) => {
            if (err) {
                console.error(err)
            }
    
            //Al confirmar que el job se agregar con exito, retornamos un mensaje de exito
            console.log("Job added id: ", jobId)
        })
    }
}


//funcion para instanciar el queue, pasarle el payloadModel


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
    payload.save()

    

    //Agregamos a la Queue una campaña que debe ser procesada "de forma asincronica"
    campaignQueue.add(payload, (err, jobId) => {
        if (err) {
            console.error(err)
        }

        //Al confirmar que el job se agregar con exito, retornamos un mensaje de exito
        console.log("Job added id: ", jobId)
    })
}

//clase
//funcion 1: instanciar el mongoose queue, que se le va a pasar como parametro el payloadModel
//funcion 2: agregar payload a la cola, se tiene que pasar el payload ya instanciado segun el modelo que se va a agregar
//dentro de esta funcion, agregarlo a la cola

export const QueueimportCsvPersons (){
    const payload = new importCsvModel({
        path:
        user:
        type:
    })
    paylaod.save()
    QueueProducer.addJobToQueue(payload)
}