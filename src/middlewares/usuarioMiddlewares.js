const usuarioModel = require('../model/usuarioModel');

const verificaEmailExistente = async (req, res, next) => {
    const { email } = req.body;
    const buscaEmail = await usuarioModel.buscarUsuarioEmail(email);
    if (buscaEmail) return res.status(400).json({ mensagem: 'Email já cadastrado.' });
    next();
};

module.exports = {
    verificaEmailExistente
}