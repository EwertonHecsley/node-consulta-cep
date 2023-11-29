const usuarioService = require('../services/usuarioService');

const criarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const usuario = await usuarioService.criarUsuario(nome, email, senha);
        const { senha: _, data_atualizacao: __, data_criacao: ___, ...usuarioFormatado } = usuario
        return res.status(201).json(usuarioFormatado);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
};

const teste = () => { }

module.exports = {
    criarUsuario,
    teste
}