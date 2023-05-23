// Se importa el enrutador de Express
import { Router } from "express";

// Se importando el gestor de rutas
import path from 'path';

// Se crea una instancis del enrutador de express
const router = Router();

// GET /admin/add-product
router.get('/add-product', (req, res, next) => {
    // Servimos el formulario
    console.log("🔊 Sirviendo formulario...");
    res.sendFile(path.resolve('views', 'add-product.html'));
});

// POST /admin/add-product 
router.post('/add-product', (req, res) => {
    // Se realiza las extraccion del 
    // parametro dentro de la peticion 
    console.log(req.body);
    res.redirect('/');
});

// Exportando el entutadir admin
export default router;