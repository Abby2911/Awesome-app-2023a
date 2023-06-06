// Se importa el enrutador de Express
import { Router } from "express";

import { getProducts } from '../controllers/products.controller.js';

// Se crea una instancis del enrutador de express
const router = Router();

// GET /
router.get('/', getProducts);

// GET /about 
router.get('/about', (req, res) => {
    console.log("🔊 Sirviendo a la ruta '/about'");
    // Se contesta al server
    res.send(`
    <h1>🧙‍♀️ About... </h1>
    <p>¡Aplicación para el curso Full Stack Web Dev I!</p>
    `);
});

export default router;