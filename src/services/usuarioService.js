const usuarioModel = require('../model/usuarioModel');
const bcrypt = require('bcrypt');

const criarUsuario = async (nome, email, senha) => {
    const senhaHash = await bcrypt.hash(senha, 8);
    const usuario = await usuarioModel.criarUsuario(nome, email, senhaHash);
    return usuario;
};

module.exports = {
    criarUsuario
};