const express = require('express');
const app = express();

const rotaUsuario = require('./routes/usuarioRotas');
const rotaLogin = require('./routes/loginRota');

app.use(express.json());

app.use(rotaLogin);
app.use(rotaUsuario);


module.exports = app;