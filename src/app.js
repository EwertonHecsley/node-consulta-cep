const express = require('express');
const app = express();

const rotaUsuario = require('./routes/usuarioRotas');
const rotaLogin = require('./routes/loginRota');
const rotaLocalizacoes = require('./routes/localizacoesRotas');
const { validarToken } = require('./middlewares/verificaUsuarioLogado');

app.use(express.json());

app.use(rotaLogin);

app.use(rotaUsuario);

app.use(validarToken);

app.use(rotaLocalizacoes);


module.exports = app;