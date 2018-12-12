var mongoose = require('mongoose');
const Schema = mongoose.Schema;

var EsquemaPartidas = new mongoose.Schema({
    jugador1: {
       type: Schema.Types.ObjectId,
       ref: 'jugador1'
    },
    jugador2: {
        type: Schema.Types.ObjectId,
        ref: 'jugador2'
    },
    puntosJugador1: Number,
    puntosJugador2: Number
    
})

module.exports = mongoose.model('partidas', EsquemaPartidas);