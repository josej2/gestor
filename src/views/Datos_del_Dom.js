//obtiene los datos de tareas en el DOM
module.exports = function  () {

    const nombre_tarea      = document.getElementById('nombre_tarea').value;
    const descripcion_tarea = document.getElementById('descripcion_tarea').value;
    const fecha_creacion    = document.getElementById('fecha_creacion').value;
    const fecha_limite      = document.getElementById('fecha_limite').value;
    const clase             = document.getElementById('clasificacion').value;
    const tipo              = document.getElementById('tipo').value;

    const objetocreacion = {
        nombreTarea    : nombre_tarea,
        descripcion    : descripcion_tarea,
        fecha_creacion : fecha_creacion,
        fecha_limite   : fecha_limite,
        clase          : clase,
        tipo           : tipo
    }
    document.getElementById('nombre_tarea').value      = ""
    document.getElementById('descripcion_tarea').value = ""
    document.getElementById('fecha_creacion').value    = ""
    document.getElementById('fecha_limite').value      = ""
    document.getElementById('clasificacion').value     = ""

    return objetocreacion
}
