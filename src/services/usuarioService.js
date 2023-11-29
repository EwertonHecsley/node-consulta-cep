const usuarioModel = require('../model/usuarioModel');
const bcrypt = require('bcrypt');
const { format } = require('date-fns')

const criarUsuario = async (nome, email, senha) => {
    const senhaHash = await bcrypt.hash(senha, 8);
    const usuario = await usuarioModel.criarUsuario(nome, email, senhaHash);
    return usuario;
};

const buscarTodosUsuarios = async () => {
    const result = await usuarioModel.buscarTodosUsuarios();
    const arrayNovoResult = [];
    result.forEach((elemento) => {
        elemento.data_criacao = format(elemento.data_criacao, 'dd/MM/yyyy');
        elemento.data_atualizacao = format(elemento.data_atualizacao, 'dd/MM/yyyy');
        const { senha: _, ...novoElemento } = elemento;
        arrayNovoResult.push(novoElemento);
    })
    return arrayNovoResult;
};

module.exports = {
    criarUsuario,
    buscarTodosUsuarios
};