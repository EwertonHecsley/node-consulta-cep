const localizacaoModel = require('../model/localizacaoModels');
const buscaCep = require('cep-promise');
require('dotenv').config();
const axios = require('axios');
const funcaoExtra = require('../utils/funcoesExtras');

const endPoint = process.env.ENDPOINT_MAPS;
const api_key = process.env.API_MAPS_KEY;


const cadastrarDadosLocalizacao = async (NumeroCep, id) => {
    const dadosLocalizacao = await buscaCep(NumeroCep);
    const usuario_id = parseInt(id);
    const { cep, state, city, neighborhood, street } = dadosLocalizacao;

    const dados = await axios.get(`${endPoint}=${cep},${state}&key=${api_key}`);

    const { lat, lng } = dados.data.results[0].geometry;

    const latString = JSON.stringify(lat);
    const lngString = JSON.stringify(lng)

    const result = await localizacaoModel.cadastrarDadosLocalizacao(usuario_id, cep, state, city, neighborhood, street, latString, lngString);

    return result;
};

const buscarTodasLocalizacoes = async (obj) => {
    const result = await localizacaoModel.buscarTodasLocalizacoes();

    if (Object.keys(obj).length === 0) {
        return result;
    };

    const { cep, estado, raio } = obj;
    const dados = await axios.get(`${endPoint}=${cep},${estado}&key=${api_key}`);
    const { lat, lng } = dados.data.results[0].geometry;
    console.log(lat, lng);
    const novoResult = funcaoExtra.enderecoNoRaio(result, lat, lng, raio);
    return novoResult;
};

module.exports = {
    cadastrarDadosLocalizacao,
    buscarTodasLocalizacoes
}