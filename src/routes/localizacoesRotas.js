const rotaLocalizacoes = require('express').Router();

const intermediarioRota = require('../middlewares/localizacaoMiddleware');

rotaLocalizacoes.post('/localizacao', intermediarioRota.verificaCepCoordenadas);

module.exports = rotaLocalizacoes;