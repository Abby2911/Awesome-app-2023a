// Se importa el enrutador de Express
import { Router } from "express";

// Se crea una instancis del enrutador de express
const router = Router();

// GET /
router.get('/', (req, res) => {
    console.log("🔊 Sirviendo a la ruta '/'");
    // Se contesta al server
    res.send(`
    <h1>Bienvenido a Express Js</h1>
    <p>Esta es mi aplicación de prueba 😶‍🌫️</p>
    `);
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

export default router;