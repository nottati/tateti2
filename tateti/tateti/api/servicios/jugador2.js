var router = require('express').Router();
var Jugador2 = require('../modelos/jugador2');

router.get('/jugador2', function(req, res){
    Jugador2.find({}).then(function(jugador2){
        res.send(jugador2);
    })
});

router.post('/jugador2', function(req, res){
    var Jugador = new Jugador2(req.body);
    console.log(Jugador);
    Jugador.save().then(function(jugador2){
        res.send(jugador2);
    }).catch(function(error){
        res.status(400).send(error);
    })
}),
router.get('/jugador2/:id', function(req, res){
    Jugador2.findById(req.params.id).populate('partidas')
        .then(function(jugador2){
            res.send(jugador2)
        }).catch(function(error){
            res.status(404).send(error)
        })
}),

router.put('/jugador2/:id', function(req, res) {
    // actualizar 
    Jugador2
      .findByIdAndUpdate(req.params.id, req.body, { new: true })
      .then(function(jugador2Actualizado) {
        res.send(jugador2Actualizado);
      });
  });

module.exports = router;