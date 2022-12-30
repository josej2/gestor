<<<<<<< HEAD
const conexionMysql = require('./conexion_mysql')


module.exports = async function () {
    try {
        const arrayConsulta = await conexionMysql.query('select * from tareas')
        console.log("tareas llamadas");
        console.log(arrayConsulta);
        return arrayConsulta
    }catch(e){
        console.log("error de llamado de datos "+e);
    }
}

=======
const conexionMysql = require('./conexion_mysql')


module.exports = async function () {
    try {
        const arrayConsulta = await conexionMysql.query('select * from tareas')
        console.log("tareas llamadas");
        console.log(arrayConsulta);
        return arrayConsulta
    }catch(e){
        console.log("error de llamado de datos "+e);
    }
}

>>>>>>> e912da27b976730187c24747432680bcba95686e
