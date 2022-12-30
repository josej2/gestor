<<<<<<< HEAD

//metodos, clases y apis de electron para iniciar 
//proceso principal y craear ventana 
const {BrowserWindow} = require('electron')
//path me permite moverme entre directorios
const path = require('path')


//retorna la ventana principal
const crearInterfaz = () => {
    //nuevo objeto para crear ventana
    const ventana = new BrowserWindow (
        {   
            //tamaño de ventana inicial
            width:800,
            height:800, 
            //tamaño minimo de ventana 
            minWidth: 600, 
            minHeight: 520,
            //preferencias o configuraciones de ventana 
            //sobre el código que podrá ejecutar
            webPreferences : {
                //las dos siguientes lineas permiten
                //ejecutar node el procesorender 
                nodeIntegration: true,
                contextIsolation: false,
                //preload: path.join(__dirname,'../preprocesador.js')  
            } 
        }
    )
    //cuerpo html que carga
    //cuando se inicia la venta
    ventana.loadFile('src/views/index.html')
    //ventana.webContents.openDevTools()
    ventana.removeMenu()    
    return ventana
}

module.exports = {
    crearInterfaz
}
=======

//metodos, clases y apis de electron para iniciar 
//proceso principal y craear ventana 
const {BrowserWindow} = require('electron')
//path me permite moverme entre directorios
const path = require('path')


//retorna la ventana principal
const crearInterfaz = () => {
    //nuevo objeto para crear ventana
    const ventana = new BrowserWindow (
        {   
            //tamaño de ventana inicial
            width:800,
            height:800, 
            //tamaño minimo de ventana 
            minWidth: 600, 
            minHeight: 520,
            //preferencias o configuraciones de ventana 
            //sobre el código que podrá ejecutar
            webPreferences : {
                //las dos siguientes lineas permiten
                //ejecutar node el procesorender 
                nodeIntegration: true,
                contextIsolation: false,
                //preload: path.join(__dirname,'../preprocesador.js')  
            } 
        }
    )
    //cuerpo html que carga
    //cuando se inicia la venta
    ventana.loadFile('src/views/index.html')
    //ventana.webContents.openDevTools()
    ventana.removeMenu()    
    return ventana
}

module.exports = {
    crearInterfaz
}
>>>>>>> e912da27b976730187c24747432680bcba95686e
