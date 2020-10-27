## Flujo con Manejo de Colas

### Producir JOB/TAREA
1. Se recibe una tarea
2. Se guardan todos los datos necesarios de esta tarea en la DB
3. Se agrega a la queue la tarea a realizar
4. Resultado:  
    a. Si la tarea fue agregada con exito, se informa tarea recibida al usuario  
    b. Si hubo un problema para agregar la tarea a la queue, se informa un error al usuario

### Consumir JOB/TAREA

1. Se despierta un Worker (o varios)
2. El worker pide tareas a la Queue
3. Procesa la tarea
4. Notifica a la queue el resultado (done:true si fue exitoso)
5. Notifica al usuario que la tarea se proceso con exito
