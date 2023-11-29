const rota = require('express').Router();

const schema = require('../schemas/usuarioSchema');
const { validarCamposRequisicaoUsuario } = require('../middlewares/validarBody');
const { verificaEmailExistente } = require('../middlewares/usuarioMiddlewares');
const controladoresUsuario = require('../controllers/usuarioController');


rota.post('/usuario', validarCamposRequisicaoUsuario(schema), verificaEmailExistente, controladoresUsuario.criarUsuario);
rota.get('/usuario/:id', controladoresUsuario.buscarUsuarioId);
rota.get('/usuario', controladoresUsuario.buscarTodosUsuarios);


module.exports = rota;