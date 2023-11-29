const rotaLogin = require('express').Router();

const schema = require('../schemas/loginSchema');
const { validarCamposRequisicaoUsuario } = require('../middlewares/validarBody');
const { confereDadosLogin } = require('../middlewares/loginMiddleware');
const { login } = require('../controllers/loginController');

rotaLogin.post('/login', validarCamposRequisicaoUsuario(schema), confereDadosLogin, login);

module.exports = rotaLogin;