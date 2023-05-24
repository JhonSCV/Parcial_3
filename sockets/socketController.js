const Coordenadas = require('../Models/Coordenadas');

module.exports = (socket) => {
    socket.on('obtener-Coordenadas', async (data) => {
    const { Id, fecha } = data;
    try {
        const coordenadas = await Coordenadas.findOne({ pedido_Id: Id, fecha });

        if (coordenadas) {
            socket.emit('coordenadas', coordenadas);
        } else {
            socket.emit('error', 'Coordenadas no encontradas');
        }
        } catch (error) {
        socket.emit('error', 'Ocurrió un error al obtener las coordenadas');
    }
    });
};
