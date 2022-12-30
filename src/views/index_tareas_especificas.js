<<<<<<< HEAD

const {recibirTareaEspecifica} = require('./comunicacion_ipc_recibir')
const {pedirCierreTarea} = require('./comunicacion_ipc_envio')


recibirTareaEspecifica(organizarTarea)







function organizarTarea (titulo_tarea, descripcion_tarea, fecha_creacion_tarea, fecha_limite_tarea) {
    titulo.innerHTML = titulo_tarea
    descripcion.innerHTML = descripcion_tarea
    fecha_creacion.innerHTML = fecha_creacion_tarea.toDateString()
    fecha_limite.innerHTML = fecha_limite_tarea.toDateString()
}



btn_cerrar_tarea.addEventListener('click', () => {
    pedirCierreTarea()
    console.log("se activa cierre");
})







/*
module.exports = {
    organizarTarea
}
=======

const {recibirTareaEspecifica} = require('./comunicacion_ipc_recibir')
const {pedirCierreTarea} = require('./comunicacion_ipc_envio')


recibirTareaEspecifica(organizarTarea)







function organizarTarea (titulo_tarea, descripcion_tarea, fecha_creacion_tarea, fecha_limite_tarea) {
    titulo.innerHTML = titulo_tarea
    descripcion.innerHTML = descripcion_tarea
    fecha_creacion.innerHTML = fecha_creacion_tarea.toDateString()
    fecha_limite.innerHTML = fecha_limite_tarea.toDateString()
}



btn_cerrar_tarea.addEventListener('click', () => {
    pedirCierreTarea()
    console.log("se activa cierre");
})







/*
module.exports = {
    organizarTarea
}
>>>>>>> e912da27b976730187c24747432680bcba95686e
*/