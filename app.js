// Importando Express
import express from 'express';

// Importando http-status
import httpStatus from 'http-status';

// Importando Path
import path from 'path';

// Importando los errores
import { error404, handleOther } from './controllers/httpError.controller.js';

// Temple Engine
import { engine } from 'express-handlebars';

// Importando el enrutador
import adminRouter from './routes/admin.routes.js';
import shopRouter from './routes/shop.routes.js';

// Importando ROOR_DIR
import { ROOT_DIR } from './helpers/paths.js';

// Creando la instancia de express
// que basicamente es un middleware
const app = express();

// Se crea la instancia del temple engine 
const hbsTemplateEngine = engine({
  // Extension de los archivos de plantillas
  extname: '.hbs',
  // Nombre del diseño por defecto 
  defaultLayout: 'main',
});

// TE1. Se registra en la instancia de express
app.engine('hbs', hbsTemplateEngine);

// TE2. Se selecciona el Templete Engine 
app.set('view engine', 'hbs');

// TE3. Se establce la ruta de las vistas
app.set('views', path.resolve('views'));

// Se registra el middleware del body-parser
app.use(express.urlencoded({ extended: true }));

// Se registra el middleware para 
// servidor de archivos estaticos
app.use(express.static(path.join(ROOT_DIR, 'public')));

// Se agrega ruta de administrador
app.use('/admin', adminRouter);
// Se agrega ruta shop
app.use(shopRouter);

// Se agrega la ruta notfound
app.use((req, res, next) => {
  error404(req, res);
});

// Se agrega la ruta 505
app.use((err, req, res, next) => {
  handleOther(err, req, res, next);
});

// Definiendo puertos
const port = 3000;
const ip = "0.0.0.0"

// Arrancando el servidor
app.listen(port, ip, () => {
  console.log(`🦾 Sirviendo en http://localhost:${port}`);
});