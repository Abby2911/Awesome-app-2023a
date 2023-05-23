// Se importa el enrutador de Express
import { Router } from "express";

// Se importando el gestor de rutas
import path from 'path';

// Se crea una instancis del enrutador de express
const router = Router();

// GET /
router.get('/', (req, res) => {
    console.log("🔊 Sirviendo la ruta '/'");
    res.sendFile(path.resolve('views', 'not-found.html'));
});

// GET /about 
router.get('/about', (req, res) => {
    console.log("🔊 Sirviendo a la ruta '/about'");
    // Se contesta al server
    res.send(`
    <h1>🧙‍♀️ About... </h1>
    <p>¡Aplicación para el curso Full Stack Web Dev I!</p>
    `);
});

export default router