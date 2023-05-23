// Se importa el enrutador de Express
import { Router } from "express";

// Importando http-status
import httpStatus from 'http-status';

// Se importando el gestor de rutas
import path from 'path';

// Se crea una instancis del enrutador de express
const router = Router();

// Registrando Middleeare para 
// el error 404
router.use('/error', (req, res) => {
    res.sendFile(path.resolve('views', 'not-found.html'));
});

export default router