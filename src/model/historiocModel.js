const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

const criarHistorico = async (usuario_id, cep, raio_especificado, data_consulta, hora_consulta) => {
    const result = await prisma.historicos.create({
        data: {
            usuario_id,
            cep,
            raio_especificado,
            data_consulta,
            hora_consulta
        }
    });
    return result;
};

const listarHistoricoUsuarioLogado = async (id) => {
    const result = await prisma.historicos.findMany({
        where: {
            usuario_id: id
        }
    });
    return result;
};

module.exports = {
    criarHistorico,
    listarHistoricoUsuarioLogado
};