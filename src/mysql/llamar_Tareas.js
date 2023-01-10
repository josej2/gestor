const conexionMysql = require('./conexion_mysql')

module.exports = async function () {
    try {
        const arrayConsulta = await conexionMysql.query('select * from tareas')
        console.log("tareas llamadas");
        return arrayConsulta
    }catch(e){
        console.log("error de llamado de datos "+e);
    }
}

