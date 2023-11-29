const usuarioModel = require('../model/usuarioModel');

const verificaEmailExistente = async (req, res, next) => {
    const { email } = req.body;
    const buscaEmail = await usuarioModel.buscarUsuarioEmail(email);
    if (buscaEmail.length > 0) return res.status(400).json({ mensagem: 'Email já cadastrado.' });
    next();
};

const verificaExistenciaID = async (req, res, next) => {
    const usuario_id = parseInt(req.params.id);
    const buscarUsuario = await usuarioModel.buscarUsuarioId(usuario_id);
    if (!buscarUsuario) return res.status(404).json({ mensagem: 'Usuário não encontrado com esse ID.' });
    next();
};

module.exports = {
    verificaEmailExistente,
    verificaExistenciaID
}