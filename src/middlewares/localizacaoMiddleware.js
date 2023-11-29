const consultaCep = require('cep-promise');

const verificaCepCoordenadas = async (req, res, next) => {
    const { cep } = req.query;
    const usuario_id = req.usuario.id;
    try {
        const consulta = await consultaCep(cep);
        req.dados = consulta;
        next();
    } catch (error) {
        return res.status(500).json({ mensagem: error.message })
    }
};

module.exports = {
    verificaCepCoordenadas
}

