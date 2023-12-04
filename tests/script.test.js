const { expect } = require('chai');
const usuarioModel = require('../src/model/usuarioModel');
const sinon = require('sinon');
const { PrismaClient } = require('@prisma/client')

describe('Testes de integração da camada model', () => {
    describe('Quando busca um usuário', () => {

        const prisma = new PrismaClient();
        const resultadoStub = [];

        before(() => {
            sinon.stub(prisma.usuarios, 'findMany').resolves(resultadoStub);
        });

        after(() => {
            prisma.usuarios.findMany.restore;
        });

        it('Deve ser um array', async () => {
            const result = await usuarioModel.buscarTodosUsuarios();
            expect(result).to.be.an('array');
        });
        it('Quando encontrar deve ser um array de objetos', async () => {
            const id = 1
            const result = await usuarioModel.buscarUsuarioId(id);
            expect(result).to.be.contains(
                {
                    "id": 1,
                    "nome": "Ewerton Hecsley",
                    "senha": "$2b$08$ZLSbXbpZvLwT93RPuZ4FGO5J2O9Se8tM86JZvwTDhMY6gYUzWxQiK"
                }
            );
        });
        it('Quando é passado um ID que nao existe, deve ser "null"', async () => {
            const result = await usuarioModel.buscarUsuarioId(100);
            expect(result).to.be.null
        })
    });
});