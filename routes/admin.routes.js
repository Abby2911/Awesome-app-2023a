// Se importa el enrutador de Express
import { Router } from "express";

// Se importa funciones del controlador
import { getAddProduct, postAddProduct } from '../controllers/products.controller.js';

// Se crea una instancis del enrutador de express
const router = Router();

// Datos en memoria volatil
export const products = [];

/// GET /admin/add-product
router.get('/add-product', getAddProduct);

// POST /admin/add-product
router.post('/add-product', postAddProduct);

// Exportando el entutadir admin
export default router;