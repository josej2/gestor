
const obtener_filtros = require('./filtro')
const obtener_datos = require('./Datos_del_Dom')
const {recibirTodas_las_Tareas} = require('./comunicacion_ipc_recibir')
const {
    enviarAlMain, 
    iniciarTareas, 
    pedirTareaEspecifica, 
    } = require('./comunicacion_ipc_envio')


iniciarTareas ()
recibirTodas_las_Tareas(recorrerTareas)
obtener_filtros()

/*******************************************************\
                    EVENTOS DE BOTON
\*******************************************************/

//  insertar nueva tarea
agregar.addEventListener('click', (event) => {
    event.preventDefault();
    enviarAlMain(obtener_datos())
})

/***********************************************************\  
                    FUNCIONES Y PROCESOS
                        PRINCIPALES  
\***********************************************************/

//  recorre el array de la consulta de tareas extraida de mysql
function recorrerTareas (tareas){
    reiniciarTareas() 
    let vuelta = 0
    tareas.map( elemento => {
        vuelta ++
        crearCuadrosdeTareas(elemento.id,elemento.nombreTarea, elemento.fecha_creacion, contarDiasTranscurridos(elemento.fecha_creacion), elemento.fecha_limite) 
    })
    let botones_tareas = document.getElementsByClassName('boton_tareas')
    
    informe_tareas_totales.innerHTML = vuelta+' tareas';

    while(vuelta !=0){
        botones_tareas[vuelta-1].addEventListener('click', (evento) => {
            evento.preventDefault()
            console.log(evento.target.id);
            pedirTareaEspecifica(evento.target.id)
        });  vuelta --
    }   
}
        /*---------------------------------
                FUNCIONES Y PROCESOS
            DE MATERIALIZAR ELEMENTOS HTML  
          ---------------------------------*/

//metodo para insertar elementos html que forman lo cuadron de tarea
function crearCuadrosdeTareas (id,titulo, fecha_creacion, dias_avance, fecha_limite){
    
    let tarea = `
        <div class="cuadro_tarea" >

            <div class="titulo_tarea" >
               <b >${titulo}</b>
               <label >Fecha creacion: ${fecha_creacion.toDateString()}</label>
            </div>

            <div class="info_avances" >
               <label >Días avanzados en la tarea</label>
               <label >${dias_avance}</label>
            </div>

            <div class="info_limite" >
                <label >fecha limite</label>
                <label >${fecha_limite.toDateString()}</label>
            </div>

            <template>
                <label id="idtarea${id}">${id}</label>
            </template>
            <button class="boton_tareas" type="button" id="${id}">
            </button>
        </div> 
    `
    contenedor_tareas.innerHTML +=tarea
}

//reinicia o elimina los elementos dentro del area de tareas
function reiniciarTareas () {
    contenedor_tareas.innerHTML = ""
}


/***********************************************************\  
                    FUNCIONES Y PROCESOS
        SECUNDARIOS QUE PROVEEN DE DATOS ESPECIFICOS  
\***********************************************************/

function contarDiasTranscurridos (fecha_creacion) {

    let fecha_hoy = new Date();
    return Math.trunc ((fecha_hoy - fecha_creacion) / (1000*60*60*24));
}


