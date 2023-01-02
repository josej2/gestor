const mysql = require('mysql')
const {requisitos_Conexion} = require('./claves')
const {promisify} = require('util');

var conexion = mysql.createPool(requisitos_Conexion);
conexion.getConnection( (error, resultadoconexion) => 
    { 
        (error) ? console.log("error de conexion "+error) : resultadoconexion.release(); console.log("Conexion exictosa");
    }
)

conexion.query = promisify(conexion.query)

module.exports = conexion; 