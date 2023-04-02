
const {app, BrowserWindow, ipcMain,} = require('electron')//metodos o apis de electron para iniciar proceso principal y craear ventana 
require('electron-reload')(__dirname)//modulo que funciona como nodemon 
const insertar_En_Mysql = require('./mysql/inserccion_Tareas')//modulo para insertar datos a mysql
const llamar_tareas_en_mysql = require('./mysql/llamar_Tareas')//modulo para llamar tareas de mysql
const llamar_tarea_especifica = require('./mysql/llamar_tarea_especifica')//modulo para llamar una tarea en especial
const eliminar_tarea_en_mysql = require('./mysql/eliminar_tarea')
const insertar_registro_tarea_eliminada_mysql = require('./mysql/insertar_registro_tarea_eliminada')
const {crearInterfaz} = require('./procesos_principales/creacion_Ventana')//modulo donde se configura y crea  ventana
const {CrearVentanaTareaEspecifica} = require('./procesos_principales/crear_ventana_tarea')



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

ipcMain.on('confirma_eliminacion', async (event, objeto) => {

    try{
        const guardado = insertar_registro_tarea_eliminada_mysql(objeto)
        guardado.then( respuesta => {
            (respuesta == true) ? eliminar_tarea_en_mysql(objeto.id) : console.log('no se ha podido guardar');
            //depués de eliminar la tarea e ingresar sus registros en otra base de datos
            //ahora se cierra la ventana de la tarea especifica
            let ventana = array_de_ventanas.find( objetoventana => objeto.id == objetoventana.identificador)

            if(ventana != null && ventana != undefined ){
                ventana.variable_ventana.close();
                actualizarTareas() 
            }
        })
    }catch (error) {
        console.log(`error al elminar y generar registro de tarea ${error}`);
    }
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


let array_de_ventanas = []
let cantidad_ventanas = 0 ;

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
    array_de_ventanas[cantidad_ventanas]=  { variable_ventana : ventana_Tarea_Especifica, identificador : id }
    cantidad_ventanas++
}

