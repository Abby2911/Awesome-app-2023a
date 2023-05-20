// Se importa el enrutador de Express
import { Router } from "express";

// Se crea una instancis del enrutador de express
const router = Router();

// GET /add-product
router.get('/add-product', (req, res, next) => {
    // Se sirve el formulario
    console.log("🔊 Sirviendo Formulario...");
    res.send(`
    <form action="/add-product" method="POST">
    <input type="text" name="title">
    <button type="submit"> Add Product </button>
    </form>
    `);
});

// POST /add-product 
router.post('/add-product', (req, res) => {
    // Se realiza las extraccion del 
    // parametro dentro de la peticion 
    console.log(req.body);
    res.redirect('/');
});

// Exportando el entutadir admin
export default router;