/********** Backend(NodeJS) - Servidor *********/
//Tabla Licencia de la Base de datos sertracen
const Sequelize = require('sequelize');
var sequelize = require('./mysql'); //conexion BD
var Role = require('./Role'); // importamos el modelo para FK roleID

// nombre de la tabla 'licencia' y se agregan los campos
var License = sequelize.define('licencia', {
    id: {
    type: Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  codigo: Sequelize.CHAR,
  nombres: Sequelize.CHAR,
  apellidos: Sequelize.CHAR,
  dui: Sequelize.CHAR,
  fecha_expedicion: Sequelize.DATEONLY,
  fecha_nacimiento: Sequelize.DATEONLY,
  direccion: Sequelize.CHAR,
  fecha_vencimiento: Sequelize.DATEONLY,
  clase: Sequelize.CHAR,
  color_ojos: Sequelize.CHAR,
  altura: Sequelize.FLOAT,
  correo: Sequelize.CHAR,
  alergias: Sequelize.CHAR,
  emergencia_nombre: Sequelize.CHAR,
  emergencia_tel: Sequelize.INTEGER,
  tipo_sangre: Sequelize.CHAR,
  medicacion: Sequelize.CHAR,
  roleId: { //llave foranea
    type: Sequelize.INTEGER,
    // Esta es una referencia a otro modelo (tabla)
    references: {
      model: Role,
      key: 'id'
    }
  }
});

License.belongsTo(Role);

module.exports = License;