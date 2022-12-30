<<<<<<< HEAD

const conexionMysql = require('./conexion_mysql')

module.exports = async function (id) {
    try {
        const tarea = await conexionMysql.query('select * from tareas where id ='+id)
        console.log(tarea);
        return tarea
    }catch(e){
        console.log("Es imposible generar la consulta "+e);
    } 
=======

const conexionMysql = require('./conexion_mysql')

module.exports = async function (id) {
    try {
        const tarea = await conexionMysql.query('select * from tareas where id ='+id)
        console.log(tarea);
        return tarea
    }catch(e){
        console.log("Es imposible generar la consulta "+e);
    } 
>>>>>>> e912da27b976730187c24747432680bcba95686e
}