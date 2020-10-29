const configQueue = require('./configQueue')

class WorkerManager{
    constructor(){
        this.jobs = []
        this.workers = []
    }
    registerJob(jobType, jobHandlerPromise, payloadModel){
        //validar jobType === string && jobHandler ==function
        this.jobs.push({
            type:jobType,
            handler:jobHandlerPromise,
            payloadModel:payloadModel
        })
        this.addWorker(jobType,payloadModel)

    }
    addWorker(jobType, payloadModel){
        let worker = new MongooseQueue(payloadModel, jobType, configQueue.options)
        this.workers.push(worker)
    }
    processJobs(){
        this.workers.forEach(worker => {
            worker.get(this.getHandler(worker))
        });
    }
    getHandler(worker){
        return (err,job) => {
            if (err) {
                console.error(err)
                return err
            }
            let j = this.jobs.find(job => job.payload.type === job.type)
            
            j.handler(job)
            .then( result => {
                if(result){
                    this.ack(job,worker)
                }
            })
            .catch(err => console.error(err))
        }         
    }
    ack(job,worker){
        worker.ack(job.id, (err, job) => {

            //Verifico que no se obtuvo un error al marcar la tarea como finalizada
            if(err){
                console.error(err)
            }

            //Notifico a los interesados (probablemente el usuario) que la tarea finalizo con exito
            console.log('\x1b[36m%s\x1b[0m', worker.workerId + ' The job with id ' + job.id + ' and payload ' + job.payload + ' is done.');

        })
    } 
}

module.exports = new WorkerManager()