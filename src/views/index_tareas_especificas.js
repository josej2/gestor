const {recibirTareaEspecifica} = require('./comunicacion_ipc_recibir')
const {eliminarTarea} = require('./comunicacion_ipc_envio')


recibirTareaEspecifica(organizarTarea)





/*******************************************************\
                    EVENTOS
\*******************************************************/




btn_cerrar_tarea.addEventListener('click', () => {
    modal_cierre.style.display = 'flex'
})

let primeravez = true

cierre_total.addEventListener('click', (e) => {
    
    e.preventDefault();
    
    

    if(validarDatos() === false){

        if( primeravez == true){
            primeravez = false
            mostrarErrores()
            hacerRebote()
        }
        else  {
            hacerRebote ()
            console.log("Ya se mostro el error");
        }
            
    }
    else  enviarDatos()

    //eliminarTarea(tomarDatosEncuesta())

    

    
})


cancelar.addEventListener ('click', (e) => {
    e.preventDefault();
    //mensaje_error.style.display = "none"
    hacerRebote()
    
})




/*******************************************************\
                FUNCIONES DE INTERACION
\*******************************************************/




function organizarTarea (titulo_tarea, descripcion_tarea, fecha_creacion_tarea, fecha_limite_tarea) {
    titulo.innerHTML = titulo_tarea
    descripcion.innerHTML = descripcion_tarea
    fecha_creacion.innerHTML = fecha_creacion_tarea.toDateString()
    fecha_limite.innerHTML = fecha_limite_tarea.toDateString()
}



function validarDatos () {

    //variable que define si se pueden ingresar los datos a mysql
    let todo_correcto = true


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
    console.log(contadorestrellas);
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
            comentarioA_bierto : comentario_abierto.value,
            calificacion_Tarea : estrellas[contadorestrellas].value,
            Tarea_completa : completo,
            fecha_cumplida : fechaCumplida
        }
        console.log(encuestaCierre);
        return encuestaCierre;
    }
    else return todo_correcto
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


function enviarDatos () {
    modal_cierre.style.display = 'none'
}


























/*
letnum = 4;
let myVar = (num > 0) ? 1 : ( (num < 0) ? 2 : 3 );
*/