var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('./db/conexion').mongoose;
const morgan = require('morgan');
var cors = require('cors');

const servicioJugador1 = require('./servicios/jugador1');
const servicioJugador2 = require('./servicios/jugador2');
const servicioPartida = require('./servicios/partida');


var app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('combined'));

app.use(servicioJugador1);
app.use(servicioJugador2);
app.use(servicioPartida);


app.listen(4500, function(){
    console.log('la app está corriendo');
})