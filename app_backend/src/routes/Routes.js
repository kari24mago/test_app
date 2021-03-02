/********** Backend(NodeJS) - Servidor *********/
//Rutas a utilizar desde el navegador
const express = require('express');
const router = express.Router();

const licenseController = require('../controllers/licenseController'); //importando el controlador 

// Controlador - rutas del CRUD 
router.post('/delete',licenseController.delete); //ruta que eliminar una licencia
router.post('/update/:id', licenseController.update); //ruta que actualizar una licencia
router.get('/get/:id',licenseController.get);
router.post('/create',licenseController.create); //ruta que crea una licencia
router.get('/list', licenseController.list ); //ruta para ver la lista de licencias

router.get('/rol', licenseController.rol ); //ruta para ver la lista de roles

router.get('/testdata', licenseController.testdata ); //ruta para ver los datos de licencia (desde ahi se puede crear las tablas y campos)

/***** rutas de prueba *****/
router.get('/test', licenseController.test); //ruta de prueba
router.get('/save', (req, res) => { //ruta de prueba
  res.json({status: 'Dato guardado'});
});
/***** fin rutas de prueba *****/

module.exports = router;