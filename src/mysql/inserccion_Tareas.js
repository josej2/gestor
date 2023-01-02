
const conexionMysql = require('./conexion_mysql')


module.exports = async function(obtener_datos) {  
    try {
        console.log("entro al inserccion")
        await conexionMysql.query("Insert Into tareas set ? ",[obtener_datos])
        console.log("insertado")
    } catch (e) { console.log("error de inserccion " + e) }
}
