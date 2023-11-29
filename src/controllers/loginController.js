require('dotenv').config();
const jwt = require('jsonwebtoken');

const login = (req, res) => {
    const { id, nome, email } = req.usuario;
    const token = jwt.sign({ id }, process.env.JWT_KEY);
    const result = {
        mensagem: 'Usuário logado com sucesso.',
        dados_usuario: {
            id,
            nome,
            email
        },
        token
    };
    return res.status(200).json(result);
};

module.exports = {
    login
};