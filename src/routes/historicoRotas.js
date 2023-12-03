const rotaHistorico = require('express').Router();

const conroladorRota = require('../controllers/historicoController');

rotaHistorico.get('/historico', conroladorRota.listarHistoricoUsuarioLogado);

module.exports = rotaHistorico;