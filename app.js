// Importar el modulo http
import http from 'http';

// Importando expressjs
import express from 'express';
import { log } from 'console';

// Crear una instancia de expressjs
const app = express();

// Registrando nuestro primer middleware
app.use((req, res, next) => {
    console.log("📣 Ejecutando Middleware 1");
    // Invocando al siguiente middleware
    next();
});

app.use((req, res, next) => {
    console.log(`👾 ${req.method} - ${req.url}`);
    next();
});

app.use((req, res) => {
    console.log("🙌 Respondiendo al Cliente");
    res.send(`
    <h1>Welcome to Express.js</h1>
    <p>This is my awesome app</p>
    `);
});

// Creando el servidor 
const server = http.createServer(app);

// Definir los puertos 
const port = 3000;
const ip = "0.0.0.0";

// Arrancando el servidor 
server.listen(port, ip, (err) => {
    console.log("📣 Sirviendo en http://locahost:3000");
    console.log(`📣 Sirviendo en http://${process.env.IP}:${process.env.PORT}`);
});