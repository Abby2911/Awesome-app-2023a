// Importando Express
import express from 'express';
// Importando http-status
import httpStatus from 'http-status';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';
import error404 from './routes/notfound.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se agrega ruta de administrador
app.use(adminRouter);
// Se agrega ruta shop
app.use(shopRouter);
// Se agrega la ruta notfound
app.use(notfound);

// Registrando Middleeare para 
// el error 404
/*app.use((req, res) => {
  res.status(httpStatus.NOT_FOUND).send(`
  <h1 style="color: crimson; text-align: center; font-size: 400%; margin: 3em 0 0 0">
  🙆‍♀️ 404 NOT FOUND 🙆‍♀️</h1>
  `);
});*/

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🦾 Sirviendo en http://localhost:${port}`);
});