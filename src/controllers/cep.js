const buscaCep = require('cep-promise');

const busca = async (cep_number) => {
    const result = await buscaCep(cep_number);
    const resposta = await result
    return resposta
};

console.log(busca(58701406));