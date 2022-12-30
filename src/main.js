
const {app, BrowserWindow, ipcMain,} = require('electron')//metodos o apis de electron para iniciar proceso principal y craear ventana 
require('electron-reload')(__dirname)//modulo que funciona como nodemon 
const insertar_En_Mysql = require('./mysql/inserccion_Tareas')//modulo para insertar datos a mysql
const llamar_tareas_en_mysql = require('./mysql/llamar_Tareas')//modulo para llamar tareas de mysql
const llamar_tarea_especifica = require('./mysql/llamar_tarea_especifica')//modulo para llamar una tarea en especial
const {crearInterfaz} = require('./procesos_principales/creacion_Ventana')//modulo donde se configura y crea  ventana
const {CrearVentanaTareaEspecifica} = require('./procesos_principales/crear_ventana_tarea')
const {crearVentanaCierreTarea} = require('./procesos_principales/creacion_ventana_cierre_tarea')





/***********************************************************\  
                CONFIGURACIONES DE APLICACION 
                ELECTRON O PROCESO PRINCIPAL 
\***********************************************************/

//soluciona error expuesto en consola web
app.disableHardwareAcceleration()

//variable a la cual se le asigna la ventana creada para 
//manejarla de forma global
let ventana

//cuando la aplicacion de electron este lista entonces iniciara la ventana
app.whenReady().then( () => {
        ventana = crearInterfaz()
    }, 
    app.on('activate', () => {
        if (BrowserWindow.getAllWindows().length === 0) crearInterfaz()
    })
)

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
}
)






/**********************************************************\  
                CANALES DE COMUNICACION
\**********************************************************/

//recibe una nueva tarea del render y ejecuta un query para guardarla en mysql
ipcMain.on('enviar_tarea', async (event, objetocreacion) => {
        //insertar_En_Mysql es un modulo requerido que solo se encarga de guardar tareas
        await insertar_En_Mysql(objetocreacion)
        //después de guardar cada tarea se actualizan la lista de tareas
        actualizarTareas()
    } 
)

//expone tareas después de que la ventana ha sido creada
ipcMain.on('inicia_ventana', () => {
    actualizarTareas()
})

//está atento a la ejecucion del evento "enlistar_tarea_especifica"
//desde el render el cual a su vez le enviara un id
ipcMain.on('enlistar_tarea_especifica', (event, id) => {
    cargarTareaEspecifica(id)
})

//esta atento a llamado de cierre de tarea desde el render
//para envíar una ventanamodal para permitir dicha operacion
ipcMain.on('cerrar_tarea', () => {
    cargarVentana_de_Cierre()
})



/***********************************************************\  
                    FUNCIONES Y PROCESOS
                    DE DINAMICA CON LA APP  
\***********************************************************/

function actualizarTareas (){
    //obtiene todas las tareas almacenadas en mysql
    const objeto = llamar_tareas_en_mysql()
    //una vez terminado el proceso de llamar envia al render un objeto de objetos
    objeto.then (tareas =>{
        ventana.webContents.send('actualizar_tareas', tareas)   
    })
}

//recibe un id de la tarea que quiere ser llamada de forma individual
function cargarTareaEspecifica (id){
    //inicia una nueva ventana
    let ventana_Tarea_Especifica = CrearVentanaTareaEspecifica(ventana)
    //llama la tarea especifica
    const tarea = llamar_tarea_especifica(id)
    //una vez la consulta retorne una respuesta ejecuta las 
    //indicaciones prensentes en el interior
    tarea.then( resultado => {
        ventana_Tarea_Especifica.loadFile('src/views/tarea_especifica.html')
        ventana_Tarea_Especifica.once ('ready-to-show', () => {
            ventana_Tarea_Especifica.show()
        })
        //envia la consulta de la tarea especifica a la nueva 
        //ventana creada
        ventana_Tarea_Especifica.webContents.send('enlistar_tarea', resultado)
    })
}


function cargarVentana_de_Cierre (){
    let ventana_cierre_tarea = crearVentanaCierreTarea(ventana)
    ventana_cierre_tarea.once('ready-to-show', () => {
        ventana_cierre_tarea.show()
    })
}
