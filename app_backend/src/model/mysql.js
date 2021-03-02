/********** Backend(NodeJS) - Servidor *********/
// Conexión de la base de datos (data base o BD)
var Sequelize = require('sequelize');

const sequelize = new Sequelize(
  'sertracen', //nombre de la base de datos
  'root', //usuario
  '', //contraseña
  {
    host: 'localhost',
    dialect: 'mysql'
  }
);

module.exports = sequelize;