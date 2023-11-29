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

module.exports = {
    criarUsuario
}

