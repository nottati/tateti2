var router = require('express').Router();
var Jugador1 = require('../modelos/jugador1');
var ObjectID = require('mongodb').ObjectID;

//me traigo todos los  jugadores 1
router.get('/jugador1', function(req, res){
    Jugador1.find({}).then(function(jugador1){
        res.send(jugador1);
    })
});

//creo un jugador 1
router.post('/jugador1', function(req, res){
    var Jugador = new Jugador1(req.body);
    Jugador.save().then(function(jugador1)
    {
        res.send(jugador1);
        
        

       
    }).catch(function(error){
        res.status(400).send(error);
    })
}),

//me traigo un jugador 1 por su id, le asocio una partida
router.get('/jugador1/:id', function(req, res){
    Jugador1.findById(req.params.id).populate('partidas')
        .then(function(jugador1){
            res.send(jugador1)
        }).catch(function(error){
            res.status(404).send(error)
        })
}),

//actualizo un jugador 1 (para agregarle más partidas)
router.put('/jugador1/:id', function(req, res) {
    Jugador1
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(function(jugador1Actualizado) {
        res.send(jugador1Actualizado);
      }).catch(function(error){
        res.status(400).send(error)
    })
  });

module.exports = router;