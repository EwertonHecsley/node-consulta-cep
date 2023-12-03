const express = require('express');
const app = express();

const rotaUsuario = require('./routes/usuarioRotas');
const rotaLogin = require('./routes/loginRota');
const rotaLocalizacoes = require('./routes/localizacoesRotas');
const { validarToken } = require('./middlewares/verificaUsuarioLogado');
const rotaHistorico = require('./routes/historicoRotas');

app.use(express.json());

app.use(rotaLogin);

app.use(rotaUsuario);

app.use(validarToken);

app.use(rotaLocalizacoes);

app.use(rotaHistorico);

module.exports = app;