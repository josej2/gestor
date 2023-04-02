const {recibirTareaEspecifica} = require('./comunicacion_ipc_recibir')
const {eliminarTarea} = require('./comunicacion_ipc_envio')


recibirTareaEspecifica(organizarTarea)


/*******************************************************\
                    VARIABLES GLOBALES
\*******************************************************/

let tarea //almacena datos de tarea traidos de mysql
let primeravez = true //ayuda a verificar que el error de 
                      //datos ya se haya lanzado una vez


/*******************************************************\
                    EVENTOS DE BOTON
\*******************************************************/


btn_cerrar_tarea.addEventListener('click', () => {
    //abre ventana modal de cierre
    modal_cierre.style.display = 'flex'
})

cierre_total.addEventListener('click', (e) => {
    e.preventDefault();
    validarCierre ()    
})

cancelar.addEventListener ('click', (e) => {
    e.preventDefault();
    cerrarVentanaModalCierre()
})

agregar_avance.addEventListener('click', () =>{
    
})


/*******************************************************\
                FUNCIONES DE INTERACION
                    CON EL DOM
\*******************************************************/


//aqui se presenta los datos de la tarea en la interfaz
// y se llena la variable global tare, definida mas arriva
function organizarTarea (titulo_tarea, descripcion_tarea, fecha_creacion_tarea, fecha_limite_tarea, id_tarea, clase_tarea  ) {
    titulo.innerHTML = titulo_tarea
    descripcion.innerHTML = descripcion_tarea
    fecha_creacion.innerHTML = fecha_creacion_tarea.toDateString()
    fecha_limite.innerHTML = fecha_limite_tarea.toDateString()

    tarea = {
        id : id_tarea,
        clase : clase_tarea,
        fecha_creacion : fecha_creacion_tarea,
        fecha_limite_establecida : fecha_limite_tarea,
    }
    console.log(tarea);
}

function mostrarErrores () {  
    mensaje_error.style.display = "flex"
}

function hacerRebote () {
    mensaje_error.classList.add('mensaje_error_rebote');
    setTimeout(() => {
        mensaje_error.classList.remove('mensaje_error_rebote');
        mensaje_error.classList.remove('mensaje_error_entrada');
    }, 1000);
}

function cerrarVentanaModalCierre (){
    modal_cierre.style.display = 'none'
}



/*******************************************************\
                FUNCIONES DE MANEJO DE
                        DATOS
\*******************************************************/



function validarCierre () {

    let resultado = validarDatos()
    
    if(resultado === false){

        if( primeravez == true){
            primeravez = false
            mostrarErrores()
            hacerRebote()
        } else  hacerRebote ()

    } else  enviarDatos(resultado), cerrarVentanaModalCierre()
}

function validarDatos () {

    
    let todo_correcto = true// variable que define si se pueden 
                            // ingresar los datos a mysql


    /****************************************\
     *  obtencion de valores de la encuesta  *
    \****************************************/
    let estrellas = document.getElementsByClassName('estrella')
    let contadorestrellas = 0
    while (contadorestrellas < 5){
        if(estrellas[contadorestrellas].checked)
            break
        contadorestrellas ++
    }
    let completo = (completadoSi.checked) ? "Si"  : ( (completadoNo.checked) ? "No" : "sin respuesta" ); 
    let fechaCumplida = (fechacumplidaSi.checked) ? "Si" : ( (fechacumplidaNo.checked) ? "No" : "sin respuesta");


    /****************************************\
     *  validacion de datos de la encuesta   *
    \****************************************/
    
    if (comentario_abierto.value === ""){
        todo_correcto = false
    }
    else if (contadorestrellas==5){
        todo_correcto = false
    }
    else if (completo === "sin respuesta"){
        todo_correcto = false
    }
    else if (fechaCumplida === "sin respuesta"){
        todo_correcto = false
    }


    /****************************************\
    *  acciones pertinentes segun resultados *
    *             de validacion              *
    \****************************************/
    
    if(todo_correcto){
        const encuestaCierre = {
            fecha_cierre : new Date(),
            calificacion : estrellas[contadorestrellas].value,
            tarea_completa : completo,
            cumplido_bajo_fecha_limite : fechaCumplida,  
            comentario : comentario_abierto.value
        }
        return encuestaCierre;
    }
    else return todo_correcto
}

function enviarDatos (datos) {
    const datos_de_cierre = {...tarea, ...datos}
    datos_de_cierre.vida_de_tarea = Math.trunc( ( (datos_de_cierre.fecha_cierre - datos_de_cierre.fecha_creacion) /(1000*60*60*24) ) ) + " Dias"
    console.log(datos_de_cierre);
    eliminarTarea(datos_de_cierre)
    
}


























/*
letnum = 4;
let myVar = (num > 0) ? 1 : ( (num < 0) ? 2 : 3 );
*/