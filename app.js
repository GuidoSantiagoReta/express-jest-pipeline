const express = require('express'); 

let app = express();


app.get('/', function(req, res){
    res.send('Enviando respuesta desde node');
 });

app.listen(3003, function(req, res){
    console.log("Servidor corriendo en el puerto: 3003")
  })

module.exports = app;