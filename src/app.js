const express = require('express');
const app = express();

const rotaUsuario = require('./routes/usuarioRotas');
const rotaLogin = require('./routes/loginRota');
const { validarToken } = require('./middlewares/verificaUsuarioLogado');

app.use(express.json());

app.use(rotaLogin);

app.use(rotaUsuario);

app.use(validarToken);


module.exports = app;