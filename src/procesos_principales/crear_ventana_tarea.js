//metodos, clases y apis de electron para iniciar 
//proceso principal y craear ventana 
const {BrowserWindow} = require('electron')


//retorna una ventana para cada tarea especifica
function  CrearVentanaTareaEspecifica (ventana){
    //nuevo objeto para crear ventanas
    const ventana_Tarea_Especifica = new BrowserWindow (
        {
            //la nueva interfaz será hija del
            //parametro ventana
            parent: ventana,
            //tamaño minimo de la nueva ventana 
            minWidth: 650, 
            minHeight: 590,
            //preferencias o configuraciones de ventana 
            //sobre el código que podrá ejecutar
            webPreferences : {
                //las dos siguientes lineas permiten
                //ejecutar node el proceso render 
                nodeIntegration: true,
                contextIsolation: false,
            }
        }
    )
    //ventana_Tarea_Especifica.removeMenu()
    return ventana_Tarea_Especifica
}


module.exports = {
    CrearVentanaTareaEspecifica
}

