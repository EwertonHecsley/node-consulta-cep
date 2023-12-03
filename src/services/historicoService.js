const historicoModel = require('../model/historiocModel');
const { format } = require('date-fns');

const criarHistorico = async (usuario_id, cep, raio_especificado, data_consulta, hora_consulta) => {
    const data_formatada = await format(data_consulta, 'dd/MM/yyyy');
    const hora_formatada = await format(hora_consulta, 'HH:mm:ss');
    const result = await historicoModel.criarHistorico(usuario_id, cep, raio_especificado, data_formatada, hora_formatada);
    return result;
};

module.exports = {
    criarHistorico
};

