const usuarioModel = require('../model/usuarioModel');
const bcrypt = require('bcrypt');
const { format } = require('date-fns')

const criarUsuario = async (nome, email, senha) => {
    const senhaHash = await bcrypt.hash(senha, 8);
    const usuario = await usuarioModel.criarUsuario(nome, email, senhaHash);
    const { senha: _, data_atualizacao: __, data_criacao: ___, ...usuarioFormatado } = usuario
    return usuarioFormatado;
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

const buscarUsuarioId = async (id) => {
    const usuario = await usuarioModel.buscarUsuarioId(id);
    usuario.data_criacao = format(usuario.data_criacao, 'dd/MM/yyyy');
    usuario.data_atualizacao = format(usuario.data_atualizacao, 'dd/MM/yyyy');
    const { senha: _, ...usuarioFormatado } = usuario
    return usuarioFormatado;
};

module.exports = {
    criarUsuario,
    buscarTodosUsuarios,
    buscarUsuarioId
};