var router = require('express').Router();
var partida = require('../modelos/partidas.js');


//me traigo todas las partidas, con sus respectivos jugadores
router.get('/partidas', function(req, res){
    partida.find({}).populate('jugador1').populate('jugador2')
    .then(function(partidas){
        res.send(partidas)
    }).catch(function(error){
        res.status(404).send(error)
    })
}
),

//creo una partida
router.post('/partidas', function(req, res){
    var nueva = new partida(req.body);
    nueva.save().then(function(nueva){
        res.send(nueva)
    }).catch(function(error){
        res.status(400).send(error)
    })
}),

router.get('/partidas/:id', function(req, res){
    Jugador1.findById(req.params.id).populate('jugador1').populate('jugador2')
        .then(function(partida){
            res.send(partida)
        }).catch(function(error){
            res.status(404).send(error)
        })
}),




module.exports = router;