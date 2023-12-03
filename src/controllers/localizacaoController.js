const localizacaoService = require('../services/localizacaoService');
const historicoService = require('../services/historicoService');

const cadastrarDadosLocalizacao = async (req, res) => {
    const { cep } = req.query;
    const { id } = req.usuario;
    try {
        const resultado = await localizacaoService.cadastrarDadosLocalizacao(cep, id);
        return res.status(201).json(resultado);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

const buscarTodasLocalizacoes = async (req, res) => {
    const usuario_id = parseInt(req.usuario.id);
    const cep = req.query.cep;
    const raio = req.query.raio;
    const data_consulta = new Date();
    const hora_consulta = data_consulta;
    try {
        await historicoService.criarHistorico(usuario_id, cep, raio, data_consulta, hora_consulta);
        const result = await localizacaoService.buscarTodasLocalizacoes(req.query);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    };
};

module.exports = {
    cadastrarDadosLocalizacao,
    buscarTodasLocalizacoes
};