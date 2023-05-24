const Coordenadas = require('../Models/Coordenadas');

const obtenerCoordenadas = async (req, res) => {
    const { Id, fecha } = req.body;

    try {
        const coordenadas = await Coordenadas.findOne({ pedido_Id: Id, fecha });

        if (coordenadas) {
            res.status(200).json({ coordenadas });
        } else {
            res.status(404).json({ error: 'Coordenadas no encontradas' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al obtener las coordenadas' });
    }
}

module.exports = {obtenerCoordenadas};
