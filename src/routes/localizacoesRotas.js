const rotaLocalizacoes = require('express').Router();

const intermediarioRota = require('../middlewares/localizacaoMiddleware');
const controladoresRota = require('../controllers/localizacaoController');

rotaLocalizacoes.post('/localizacao', intermediarioRota.verificaCepCoordenadas, controladoresRota.cadastrarDadosLocalizacao);
rotaLocalizacoes.get('/localizacao', controladoresRota.buscarTodasLocalizacoes);

module.exports = rotaLocalizacoes;