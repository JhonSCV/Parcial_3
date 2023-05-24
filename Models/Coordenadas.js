const { Schema, model } = require("mongoose");

const CoordenadasScheme = Schema({
    x: {
        type: Number,
        required: true
    },
    y: {
        type: Number,
        required: true
    },
    Pedido_Id: {
        type: Schema.Types.ObjectId,
        ref: 'Pedido',
        required: true
    }
})

module.exports = model('Coordenadas', CoordenadasScheme)