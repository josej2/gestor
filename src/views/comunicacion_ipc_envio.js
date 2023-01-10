
//modulo para enviar datos al proceso main
const {ipcRenderer} = require('electron')


//envía una nueva tarea como 
//objeto al proceso principal
const enviarAlMain = (objeto) => {
    ipcRenderer.send('enviar_tarea', objeto)
}


//evento para cargar las tareas cuando 
//inicia la ventana
function iniciarTareas () {
    ipcRenderer.send('inicia_ventana')  
}


//evento para pedir una tarea especifica
function pedirTareaEspecifica (id){
    ipcRenderer.send('enlistar_tarea_especifica', id)
}

function eliminarTarea (objeto){
    ipcRenderer.send ('confirma_eliminacion', objeto)
}


module.exports = {
    enviarAlMain,
    iniciarTareas,
    pedirTareaEspecifica,
    eliminarTarea
}
