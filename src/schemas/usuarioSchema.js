const joi = require('joi');

const schemaUsuario = joi.object({
    nome: joi.string().required().regex(/^[A-Za-z\s]+$/).messages({
        'any.required': 'Campo nome é obrigatorio',
        'string.empty': 'Campo nome não pode ser vazio',
        'string.base': 'Formato de nome invalido',
        'string.pattern.base': 'Formato de nome inválido. Use apenas letras e espaços.',
    }),
    email: joi.string().required().email().messages({
        'any.required': 'Campo email é obrigatorio',
        'string.empty': 'Campo email não pode ser vazio',
        'string.base': 'Formato de email invalido',
        'string.email': 'Formato de email inválido. Deve ser um endereço de email válido.',
    }),
    senha: joi.string().required().min(4).max(10).messages({
        'any.required': 'Campo senha obrigatorio',
        'string.empty': 'Campo senha deve ser preenchido',
        'string.min': 'Senha deve ter no minimo 3 caracteres',
        'string.max': 'Senha deve ter no maximo 8 caracteres'
    })
});


module.exports = schemaUsuario;
