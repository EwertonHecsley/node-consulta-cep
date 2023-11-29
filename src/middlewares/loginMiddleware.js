const bcrypt = require('bcrypt');
const usuarioMdel = require('../model/usuarioModel');

const confereDadosLogin = async (req, res, next) => {
    const { email, senha } = req.body;
    try {
        const usuario = await usuarioMdel.buscarUsuarioEmail(email);
        if (usuario.length === 0) return res.status(404).json({ mensagem: 'Email inválido' });
        const verificaSenha = await bcrypt.compare(senha, usuario[0].senha);
        if (!verificaSenha) return res.status(404).json({ mensagem: 'Senha inválida.' });
        req.usuario = usuario[0];
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    confereDadosLogin
}