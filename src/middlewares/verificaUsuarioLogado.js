require('dotenv').config();
const jwt = require('jsonwebtoken');
const usuarioModel = require('../model/usuarioModel');

const validarToken = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization) return res.status(401).json({ mensagem: 'Para ter acesso completo, um token váldo deve ser informado.' });

        const token = authorization.split(' ')[1];

        const { id } = jwt.verify(token, process.env.JWT_KEY);

        if (!id) return res.status(401).json({ mensagem: 'Usuário não autorizado' });

        const usuario = await usuarioModel.buscarUsuarioId(id);

        req.usuario = usuario

        next()
    } catch (error) {
        if (error.message === 'invalid signature') {
            return res.status(401).json({ mensagem: 'Para acessar este recurso um token de autenticação válido deve ser enviado' });
        };
        return res.status(500).json({ mensagem: error.message })
    }
};

module.exports = {
    validarToken
}