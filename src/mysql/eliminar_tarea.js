
const conexionMysql = require('./conexion_mysql')

module.exports = async function (id){
    
    try{
        await conexionMysql.query("delete from tareas where id="+id)
        console.log("tarea eliminada");
    }catch (e) {
        console.log("error al eliminar");
    }
}