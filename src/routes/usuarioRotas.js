const rotaUsuario = require('express').Router();

const schema = require('../schemas/usuarioSchema');
const { validarCamposRequisicaoUsuario } = require('../middlewares/validarBody');
const intermediarioUsuario = require('../middlewares/usuarioMiddlewares');
const controladoresUsuario = require('../controllers/usuarioController');


rotaUsuario.post('/usuario', validarCamposRequisicaoUsuario(schema), intermediarioUsuario.verificaEmailExistente, controladoresUsuario.criarUsuario);
rotaUsuario.get('/usuario/:id', intermediarioUsuario.verificaExistenciaID, controladoresUsuario.buscarUsuarioId);
rotaUsuario.get('/usuario', controladoresUsuario.buscarTodosUsuarios);

module.exports = rotaUsuario;