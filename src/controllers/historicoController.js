const historicoService = require('../services/historicoService');

const listarHistoricoUsuarioLogado = async (req, res) => {
    const usuario_id = parseInt(req.usuario.id);
    try {
        const result = await historicoService.listarHistoricoUsuarioLogado(usuario_id);
        return res.status(200).json(result);
    } catch (error) {
        return res.status(500).json({ mensagem: error.message });
    }
};

module.exports = {
    listarHistoricoUsuarioLogado
};