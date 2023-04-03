const conexionMysql = require('./conexion_mysql')

module.exports = async function (condiciones){

    try {
        const tareas = await conexionMysql.query('select * from tareas where '+condiciones)
        return tareas
    } catch (e) {
         console.log('error de filtrado '+e);
    }
}