const workerManager = require('./workerManager')

const cleanNotification = (job) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Simulamos limpiar las Notificaciones',job)
            resolve(true)
        }, 2000);
    })
}

workerManager.registerJob('cleanNotification',cleanNotification,'payloadQueue')

const importCsv = (job) => {
    return new Promise((resolve,reject) => {
        setTimeout(() => {
            console.log('Simulamos importar un CSV', job)
            resolve(true)
        }, 2000);
    })
}

workerManager.registerJob('importCsv',importCsv,'payloadQueue')