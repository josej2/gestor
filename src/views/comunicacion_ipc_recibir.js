

const {ipcRenderer} = require('electron')


function recibirTodas_las_Tareas (callback){
    ipcRenderer.on('actualizar_tareas', (event, objeto,) => {
        console.log("evento de actualizar tareas");
        callback(objeto)
    })
}

function recibirTareaEspecifica (callback){
    ipcRenderer.on('enlistar_tarea', (event, objeto) => {
        console.log("recibe un evento");
        console.log(objeto);
        objeto.map( carater => {
            console.log(carater.nombreTarea);
            callback(carater.nombreTarea, carater.descripcion, carater.fecha_creacion, carater.fecha_limite)
        })       
    })
}


module.exports = {
    recibirTodas_las_Tareas,
    recibirTareaEspecifica
}

//console.log(Object.values(objeto));
//console.log(Object.keys(objeto));
//console.log(Object.entries(objeto));


