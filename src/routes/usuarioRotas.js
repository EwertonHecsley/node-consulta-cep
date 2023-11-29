const rota = require('express').Router();
const { rotasUsuario } = require('./indexRota');

rota.post('/usuario', rotasUsuario.criarUsuario);


module.exports = rota;