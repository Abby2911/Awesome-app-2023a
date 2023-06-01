// Se importa el enrutador de Express
import { Router } from "express";

// Se importando el gestor de rutas
import path from 'path';

// Se importa ROOT_DIR
import { ROOT_DIR } from '../helpers/paths.js';

// Se crea una instancis del enrutador de express
const router = Router();

// Datos en memoria volatil
export const products = [];

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    // Servimos el formulario
    console.log("🔊 Sirviendo formulario...");
    res.render('add-product', {
        addProduct: `active`,
        viewStyle: '/css/add-product.css',
        docTitle: "Add Product"
    });
});

// POST /admin/add-product 
router.post('/add-product', (req, res) => {
    // Se realiza la desestructuracion de
    // "name" de la peticion
    const { title } = req.body;
    // Se agrega el dato de la base de datos
    products.push(title);
    // Redireccionamineto
    res.redirect('/');
});

// Exportando el entutadir admin
export default router;