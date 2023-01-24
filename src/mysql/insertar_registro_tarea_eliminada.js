

const conexionMysql = require('./conexion_mysql');        


module.exports = async function (registro){
    try{  
        await conexionMysql.query('insert into tareaseliminadas set ? ',[registro])
        return true
    }catch (e){
        console.log(`error, no se ha podido insertar el registro de tarea eliminada ${e} `);
        return false
    }
}