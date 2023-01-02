

//obtiene los datos de tareas en el DOM
module.exports = function  () {

    const nombre_tarea = document.getElementById('nombre_tarea').value;
    const descripcion_tarea = document.getElementById('descripcion_tarea').value;
    const fecha_creacion = document.getElementById('fecha_creacion').value;
    const fecha_limite = document.getElementById('fecha_limite').value;

    const objetocreacion = {
        nombreTarea : nombre_tarea,
        descripcion : descripcion_tarea,
        fecha_creacion : fecha_creacion,
        fecha_limite : fecha_limite
    }
    document.getElementById('nombre_tarea').value = ""
    document.getElementById('descripcion_tarea').value = ""
    document.getElementById('fecha_creacion').value = ""
    document.getElementById('fecha_limite').value = ""

    return objetocreacion
}

