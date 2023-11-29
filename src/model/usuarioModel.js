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

const buscarUsuarioEmail = async (email) => {
    const usuario = await prisma.usuarios.findMany({
        where: {
            email
        }
    });
    return usuario[0].email;
};

module.exports = {
    criarUsuario,
    buscarUsuarioEmail
}

