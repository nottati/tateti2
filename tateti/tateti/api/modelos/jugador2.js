var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var EsquemaJugador2 = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    partidas: [{
        type: Schema.Types.ObjectId,
        ref: 'partidas'
    }],
    puntos: {
        type: Number
    }
})

module.exports = mongoose.model('jugador2', EsquemaJugador2);