<<<<<<< HEAD
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

function pedirCierreTarea (){
    ipcRenderer.send('cerrar_tarea') 
}


module.exports = {
    enviarAlMain,
    iniciarTareas,
    pedirTareaEspecifica,
    pedirCierreTarea
}

=======
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

function pedirCierreTarea (){
    ipcRenderer.send('cerrar_tarea') 
}


module.exports = {
    enviarAlMain,
    iniciarTareas,
    pedirTareaEspecifica,
    pedirCierreTarea
}

>>>>>>> e912da27b976730187c24747432680bcba95686e
