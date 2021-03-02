/********** Backend(NodeJS) - Servidor *********/
//Tabla Roles de la Base de datos sertracen
const Sequelize = require('sequelize');
var sequelize = require('./mysql'); //conexion BD

//nombre de la tabla 'role'
var Role = sequelize.define('role', {
  role: Sequelize.CHAR
},
{
  //crear, actualizar, eliminar
	timestamps: false,
});

module.exports = Role