const express = require('express');
const server = express();
const cors = require('cors');
const path = require('path');

//Configuraciones
server.set('port',8080);
server.set('host','localhost');

//Middlewares
server.use(express.json());
server.use(cors());
server.use(express.static(path.join(__dirname, 'build')));

//Rutas
server.get('/', function (req, res) {
   res.send('<h1> Hola mundo con Express :) :P </h1>')
});

module.exports = server;
server.use('/estudiantes', require('./routes/estudiantes.js')); 
server.get('*', (req, res) => {
    res.status(404).send("<h1>Error 404</h1><h2>Página no encontrada, intente de nuevo :)</h2>")
})
server.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
})
