var mongoose = require('mongoose');

mongoose.Promise = global.Promise;

mongoose
  .connect(
    'mongodb://localhost:27017/tateti', 
    { useNewUrlParser: true }
  ).then(function(result) {
    console.log('Conexión a base de datos exitosa');
  }).catch(function(error) {
    console.log('Error al conectar con la base de datos', error);
  });

module.exports = {
  mongoose
};