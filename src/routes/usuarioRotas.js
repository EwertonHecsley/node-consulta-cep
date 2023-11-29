const rota = require('express').Router();

const schema = require('../schemas/usuarioSchema');
const { validarCamposRequisicaoUsuario } = require('../middlewares/validarBody');
const intermediarioUsuario = require('../middlewares/usuarioMiddlewares');
const controladoresUsuario = require('../controllers/usuarioController');


rota.post('/usuario', validarCamposRequisicaoUsuario(schema), intermediarioUsuario.verificaEmailExistente, controladoresUsuario.criarUsuario);
rota.get('/usuario/:id', intermediarioUsuario.verificaExistenciaID, controladoresUsuario.buscarUsuarioId);
rota.get('/usuario', controladoresUsuario.buscarTodosUsuarios);

module.exports = rota;