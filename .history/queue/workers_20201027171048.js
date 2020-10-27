const mongoose = require("mongoose")
require('./../model/campaignModel')
mongoose.connect('mongodb://localhost:27017/lab-queue', {useNewUrlParser: true})
const {MongooseQueue} = require('mongoose-queue');
const configQueue = require('./configQueue')
const randomNumber = require('./../utils/randomNumber')
const campaignModel = require('./../model/campaignModel')

const workerOne = new MongooseQueue(configQueue.payloadModel, 'workerOne', configQueue.options)

const workerTwo = new MongooseQueue(configQueue.payloadModel, 'workerTwo', configQueue.options)
console.log("Iniciando ")


function processesCampaign(worker, count) {
    count++
    console.log("processesCampaign round:", count)

    //Obtengo un trabajo pendiente desde la Queue
    worker.get(function (err, job) {

        //Verifico si obtuve un error al pedir el trabajo
        if (err) {
            console.error(err)
            return err
        }

        if(job === null){
            console.log("NO HAY MAS JOBS PENDIENTES")
            return
        }

        console.log(worker.workerId, "Init",
            "JobId: ", job.id,
            "payload: ", job.payload,
            "done: ", job.done
        );

        //Genero un tiempo random con proposito del ejercicio
        let time = randomNumber(4)

        //Hago un settimeout para "simular" que estoy haciendo un trabajo que me lleva tiempo
        setTimeout(() => {
            //Aca haria el trabajo, ejemplo: recorrer un CSV e importar sus datos a la DB
            let campaign = new campaignModel(
                job.payload
            )           
            campaign.save()
            //Al terminar de hacer el trabajo, hago un update sobre la entidad objetivo
            job.payload.time = time
            job.payload.save(
                function (err) {
                    if (err) return handleError(err);

                    //Al obtener un update exitoso, comunico que el job fue finalizado con exito
                    worker.ack(job.id, (err, job) => {

                        //Verifico que no se obtuvo un error al marcar la tarea como finalizada
                        if(err){
                            console.error(err)
                        }

                        //Notifico a los interesados (probablemente el usuario) que la tarea finalizo con exito
                        console.log('\x1b[36m%s\x1b[0m', worker.workerId + ' The job with id ' + job.id + ' and payload ' + job.payload + ' is done.');

                        //Ejemplo: Servicio que notifica al usuario
                        // let message = "Su importacion de CSV 'nombreDelCsv' fue realizada con exito. Total: 20, Exitosos: 18. Errores: 2"
                        //createNotification(job.user,message)

                        //Llamo a la funcion recursiva para volver a pedir otro Job
                        processesCampaign(worker, count)

                    })
                }

            )


        }, time)

    })


}


processesCampaign(workerOne, 0)
processesCampaign(workerTwo, 0)
