

const {ipcRenderer} = require('electron')


function recibirTodas_las_Tareas (callback){
    ipcRenderer.on('actualizar_tareas', (event, objeto,) => {
        console.log("evento de actualizar tareas");
        callback(objeto)
    })
}

function recibirTareaEspecifica (callback){
    ipcRenderer.on('enlistar_tarea', (event, objeto) => {
        objeto.map( caracter => {
            callback(caracter.nombreTarea, caracter.descripcion, caracter.fecha_creacion, caracter.fecha_limite, caracter.id, caracter.clase)
        })
        
        return objeto
    })

    
}


module.exports = {
    recibirTodas_las_Tareas,
    recibirTareaEspecifica
}

//console.log(Object.values(objeto));
//console.log(Object.keys(objeto));
//console.log(Object.entries(objeto));


