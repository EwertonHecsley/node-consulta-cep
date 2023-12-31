const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const criarUsuario = async (nome, email, senha) => {
    const usuario = await prisma.usuarios.create({
        data: {
            nome,
            email,
            senha
        }
    });
    return usuario;
};

const buscarUsuarioId = async (id) => {
    const usuario = await prisma.usuarios.findUnique({
        where: {
            id
        }
    });
    return usuario;
};

const buscarUsuarioEmail = async (email) => {
    const usuario = await prisma.usuarios.findMany({
        where: {
            email
        }
    });
    return usuario;
};

const buscarTodosUsuarios = async () => {
    const result = await prisma.usuarios.findMany();
    return result;
};

module.exports = {
    criarUsuario,
    buscarUsuarioEmail,
    buscarTodosUsuarios,
    buscarUsuarioId
}

