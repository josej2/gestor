<<<<<<< HEAD

const conexionMysql = require('./conexion_mysql')


module.exports = async function(obtener_datos) {  
    try {
        console.log("entro al inserccion")
        await conexionMysql.query("Insert Into tareas set ? ",[obtener_datos])
        console.log("insertado")
    } catch (e) { console.log("error de inserccion " + e) }
}
    


=======

const conexionMysql = require('./conexion_mysql')


module.exports = async function(obtener_datos) {  
    try {
        console.log("entro al inserccion")
        await conexionMysql.query("Insert Into tareas set ? ",[obtener_datos])
        console.log("insertado")
    } catch (e) { console.log("error de inserccion " + e) }
}
    


>>>>>>> e912da27b976730187c24747432680bcba95686e
 