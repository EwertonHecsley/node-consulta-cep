const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const cadastrarDadosLocalizacao = async (usuario_id, cep, estado, cidade, bairro, rua, lat, long) => {
    const resultado = await prisma.localizacoes.create({
        data: {
            cep,
            estado,
            cidade,
            bairro,
            rua,
            lat,
            long,
            usuario_id
        }
    });
    return resultado;
};

module.exports = {
    cadastrarDadosLocalizacao
}