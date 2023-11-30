const haversine = (latitude1, longitude1, latitude2, longitude2) => {
    const toRadians = (deg) => deg * (Math.PI / 180);
    const latitude1_rad = toRadians(latitude1);
    const longitude1_rad = toRadians(longitude1);
    const latitude2_rad = toRadians(latitude2);
    const longitude2_rad = toRadians(longitude2);

    const d = 2 * 6371 * Math.asin(
        Math.sqrt(
            Math.sin(latitude2_rad - latitude1_rad) ** 2
            / Math.cos(latitude1_rad) ** 2 * Math.cos(latitude2_rad) ** 2
            + Math.cos(longitude2_rad - longitude1_rad) ** 2
        )
    );

    return d / 1000;
};

const enderecoNoRaio = async (arrEnderecos, latitudeReference, longitudeReference, radiusKm) => {
    return arrEnderecos.filter((coordenada) => {
        const { lat, long } = coordenada;
        const latitude = parseFloat(lat);
        const longitude = parseFloat(long);
        const distancia = haversine(
            latitudeReference,
            longitudeReference,
            latitude,
            longitude
        );
        console.log(distancia);
        return distancia <= radiusKm;
    });
};

module.exports = { enderecoNoRaio }