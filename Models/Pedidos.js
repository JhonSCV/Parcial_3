const { Schema, model } = require("mongoose");

const PedidosScheme = Schema({
    Id: {
        type: Number,
        required: true
    },
    fecha: {
        type: Date,
        required: true
    },
})

module.exports = model('Pedido', PedidosScheme)