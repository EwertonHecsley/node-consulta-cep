const math = require('mathjs');

const haversine = (lat1, lon1, lat2, lon2, raioKm) => {
    if (isNaN(lat1) || isNaN(lon1) || isNaN(lat2) || isNaN(lon2) || isNaN(raioKm)) {
        throw new Error('As coordenadas e o raio fornecidos devem ser números válidos.');
    }

    const toRadians = (deg) => deg * (Math.PI / 180);
    lat1 = toRadians(lat1);
    lon1 = toRadians(lon1);
    lat2 = toRadians(lat2);
    lon2 = toRadians(lon2);

    const dlat = lat2 - lat1;
    const dlon = lon2 - lon1;

    const a = Math.sin(dlat / 2) ** 2 + Math.cos(lat1) * Math.cos(lat2) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));

    const distancia = 6371.0 * c;

    return distancia;
};

const enderecoNoRaio = async (arrEnderecos, latRef, longRef, raioKm) => {
    const enderecosNoRaio = [];

    for (const endereco of arrEnderecos) {
        const { lat, long } = endereco;
        const distancia = haversine(latRef, longRef, lat, long, raioKm);
        console.log(distancia);
        if (distancia <= raioKm) {
            enderecosNoRaio.push(endereco);
        };
    };
    return enderecosNoRaio;
};

module.exports = { enderecoNoRaio };