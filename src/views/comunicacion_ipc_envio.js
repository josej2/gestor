
//modulo para enviar datos al proceso main
const {ipcRenderer} = require('electron')


//envía una nueva tarea como 
//objeto al proceso principal
const enviarAlMain = (objeto) => {
    ipcRenderer.send('enviar_tarea', objeto)
}

//evento para cargar las tareas cuando 
//inicia la ventana y cuando se actualiza
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

//evento para filtrar las tareas por tipo y clase
function filtrar (filtro){
    ipcRenderer.send('filtrar',filtro)
}

module.exports = {
    enviarAlMain,
    iniciarTareas,
    pedirTareaEspecifica,
    eliminarTarea,
    filtrar
}
