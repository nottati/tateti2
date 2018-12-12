var mongoose = require('mongoose');
const Schema = mongoose.Schema;


var EsquemaJugador1 = new mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    partidas: [{
        type: Schema.Types.ObjectId,
        ref: 'partidas'
    }],
   puntos: Number
})

module.exports = mongoose.model('jugador1', EsquemaJugador1);