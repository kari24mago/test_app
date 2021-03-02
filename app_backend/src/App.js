/********** Backend(NodeJS) - Servidor *********/
/******** server ********/

// importamos express
const express = require('express');
const app = express();

//configuracion del puerto
app.set('port',process.env.PORT||3000); //Puerto a utilizar
app.use(express.json()); //Middlewares

// Configurar cabeceras y cors
app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});

// importamos las rutas
const rutasCrudLicencia = require('./routes/Routes');

//Ruta a utilizar
app.use('/licencia', rutasCrudLicencia);

//accedemos a una ruta llamada test como prueba
app.use('/test', (req, res) => {
  res.send("Ruta de prueba");
});

//Ruta principal
app.use('/', (req,res) => {
  res.send("Node.js - Servidor Express funcionando. :)");
});

app.listen(app.get('port'),()=>{
  console.log("Iniciamos el servidor de Node.js en el puerto: "+app.get('port'));
});