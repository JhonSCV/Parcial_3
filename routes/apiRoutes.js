const express = require('express');
const PedidosController = require('../Controllers/PedidosController');
const CoordenadasController = require('../Controllers/CoordenadasController');

const router = express.Router();

router.post('/enviar-Pedido', PedidosController.enviarPedido);

router.post('/obtener-Coordenadas', CoordenadasController.obtenerCoordenadas);

module.exports = router;
