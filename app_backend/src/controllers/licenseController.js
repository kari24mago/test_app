/********** Backend(NodeJS) - Servidor *********/
const controller = {}
//controlador de los modelos BD
var sequelize = require('../model/mysql'); //modelo y sequelize
var License = require('../model/License');
var Role = require('../model/Role');

sequelize.sync(); //para migrar por si no tiene tablas

// funcion testdata - donde creo las tablas y registro
controller.testdata = async ( req, res) => {
  const response = await sequelize.sync().then(function() {

/* Ingresando datos a la BD desde el codigo */
/* Para que se cree el registro de las tablas Licencia y Rol, se debe ir a la ruta: http://localhost:3000/licencia/testdata */
  //Agregando un dato a la tabla de roles 
  // Role.create({
  //   id: 1,
  //   role:  'Administrador'
  // });

  //Agregando un dato a la tabla de licencia
  // License.create({
    // id_licencia: 1,
    // id: 1,
    // codigo: "0000-000000-000-1",
    // nombres: "Magaly",
    // apellidos: "García",
    // dui: "00000000-1",
    // // fecha_expedicion: "2021-02-22T00:00:00.000Z",
    // fecha_expedicion: "2021-02-22",
    // // fecha_nacimiento: "1993-08-24T00:00:00.000Z",
    // fecha_nacimiento: "1993-08-24",
    // direccion: "Col. San Carlos",
    // // fecha_vencimiento: "2022-02-22T00:00:00.000Z",
    // fecha_vencimiento: "2022-02-22",
    // clase: "liviana",
    // color_ojos: "café",
    // altura: 1.7,
    // correo: "correo@gmail.com",
    // alergias: "Penicilina",
    // emergencia_nombre: "I. G.",
    // emergencia_tel: 22100000,
    // tipo_sangre: "O RH+",
    // medicacion: "Tussyn",
    // roleId: 1
  // });
  /* fin de ingreso de datos a la BD */

    const data =  License.findAll(); //llamar todos los datos de licencia
    return data;
    
  })
  .catch(error => {
    return error;
  });
  res.json({Data_success: true, data: response});
}

// funcion list - listado de licencias 
controller.list = async ( req, res) => {

  const data = await License.findAll({
    include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 

  res.json({nodeJS_success: true, data: data});
}

// funcion rol - listado de roles (no lo use en Frontend solo en Backend)
controller.rol = async ( req, res) => {
  const data = await Role.findAll()
  .then(function(data){
    return data;
  })
  .catch(error => {
    return error;
  }); 
  res.json({nodeJS_success: true, data: data});
}

// funcion create - crear licencia
controller.create = async (req,res) => {
  // data
  const { codigo, nombres, apellidos, dui, fecha_expedicion, fecha_nacimiento, direccion, fecha_vencimiento, clase, color_ojos, altura, correo, alergias, emergencia_nombre, emergencia_tel, tipo_sangre, medicacion, role } = req.body;
  
  console.log("El rol es: "+role);
  const data = await License.create({ // crear registro
    codigo: codigo,
    nombres: nombres,
    apellidos: apellidos,
    dui: dui,
    fecha_expedicion: fecha_expedicion,
    fecha_nacimiento: fecha_nacimiento,
    direccion: direccion,
    fecha_vencimiento: fecha_vencimiento,
    clase: clase,
    color_ojos: color_ojos,
    altura: altura,
    correo: correo,
    alergias: alergias,
    emergencia_nombre: emergencia_nombre,
    emergencia_tel: emergencia_tel,
    tipo_sangre: tipo_sangre,
    medicacion: medicacion,
    roleId: role 
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    console.log("Error... "+error)
    return error;
  })
  // return res
  res.status(200).json({
    success: true,
    message:"Datos guardados exitosamente",
    data: data
  });
}

//funcion get
controller.get = async (req, res) => {
  const { id } = req.params;
  // console.log("El id del rol es *** "+id);
  const data = await License.findAll({
      where: { id: id },
      include: [ Role ]
  })
  .then(function(data){
    return data;
  })
  .catch(error =>{
    return error;
  })
  res.json({ success: true, data: data });
}

// funcion update - actualizar datos de licencia
controller.update = async (req, res) => {
  const { id } = req.params; // obtener id de parámetro
  console.log('el id de edit es: '+id);
  // parámetro POST
  const { codigo, nombres, apellidos, dui, fecha_expedicion, fecha_nacimiento, direccion, fecha_vencimiento, clase, color_ojos, altura, correo, alergias, emergencia_nombre, emergencia_tel, tipo_sangre, medicacion, role } = req.body;
  
  console.log("El rol es: "+role);
  const data = await License.update({ // datos Update
    codigo: codigo,
    nombres: nombres,
    apellidos: apellidos,
    dui: dui,
    fecha_expedicion: fecha_expedicion,
    fecha_nacimiento: fecha_nacimiento,
    direccion: direccion,
    fecha_vencimiento: fecha_vencimiento,
    clase: clase,
    color_ojos: color_ojos,
    altura: altura,
    correo: correo,
    alergias: alergias,
    emergencia_nombre: emergencia_nombre,
    emergencia_tel: emergencia_tel,
    tipo_sangre: tipo_sangre,
    medicacion: medicacion,
    roleId: role
  },
  {
    where: { id: id}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  }) 
  res.json({success:true, data:data, message:"Actualización exitosa"});
}

// funcion delete - borrar una licencia
controller.delete = async (req, res) => {
  const { id } = req.body; // parametro de post
  const del = await License.destroy({ // eliminar un dato de la base
    where: { id: id}
  })
  res.json({success:true,deleted:del,message:"Eliminación exitosa"});
}

//prueba
controller.test = (req, res) => {
  const data = {
    name: "Jhon Smith",
    age: 20,
    city: 'London'
  }
  console.log("Enviar datos del controlador");
  res.json(data);
};

module.exports = controller;