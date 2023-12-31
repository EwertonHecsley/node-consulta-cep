const usuarioService = require('../services/usuarioService');

const criarUsuario = async (req, res) => {
    const { nome, email, senha } = req.body;
    try {
        const usuario = await usuarioService.criarUsuario(nome, email, senha);
        return res.status(201).json(usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
};

const buscarTodosUsuarios = async (_req, res) => {
    try {
        const result = await usuarioService.buscarTodosUsuarios();
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
};

const buscarUsuarioId = async (req, res) => {
    const usuario_id = parseInt(req.params.id);
    try {
        const usuario = await usuarioService.buscarUsuarioId(usuario_id);
        return res.status(200).json(usuario);
    } catch (error) {
        return res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
};

module.exports = {
    criarUsuario,
    buscarTodosUsuarios,
    buscarUsuarioId
}