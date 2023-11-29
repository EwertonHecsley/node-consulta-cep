const localizacaoService = require('../services/localizacaoService');

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

module.exports = {
    cadastrarDadosLocalizacao
}