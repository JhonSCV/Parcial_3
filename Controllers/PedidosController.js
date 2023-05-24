const Pedidos = require('../Models/Pedidos');

const enviarPedido = async (req, res) => {
    const { Id, fecha } = req.body;

    try {
        const pedido = new Pedido({ Id, fecha });
        await pedido.save();

        res.status(200).json({ message: 'Pedido enviado con éxito' });
    } catch (error) {
        res.status(500).json({ error: 'Ocurrió un error al enviar el pedido' });
    }
}

module.exports = {enviarPedido};
