
const {BrowserWindow} = require('electron')

function crearVentanaCierreTarea (ventana){
    const ventanamodalcierre = new BrowserWindow({
        parent : ventana,
        modal : true,
        show : true,
        frame: false,
        height : 400,
        width : 500,
        //preferencias o configuraciones de ventana 
        //sobre el código que podrá eje
        webPreferences : {
            //las dos siguientes lineas permiten
            //ejecutar node el proceso render 
            nodeIntegration: true,
            contextIsolation: false,
        }
    })

    return ventanamodalcierre
}



module.exports = {
    crearVentanaCierreTarea
}