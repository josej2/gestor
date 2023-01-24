
const conexionMysql = require('./conexion_mysql')

module.exports = async function (id) {
    try {
        const tarea = await conexionMysql.query('select * from tareas where id ='+id)
        return tarea
    }catch(e){
        console.log("Es imposible generar la consulta "+e);
    } 
}