const rotaLocalizacoes = require('express').Router();

const intermediarioRota = require('../middlewares/localizacaoMiddleware');
const controladoresRota = require('../controllers/localizacaoController');

rotaLocalizacoes.post('/localizacao', intermediarioRota.verificaCepCoordenadas, controladoresRota.cadastrarDadosLocalizacao);

module.exports = rotaLocalizacoes;