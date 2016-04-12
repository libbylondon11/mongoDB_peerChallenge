var express=require('express');
var mongoose = require('mongoose');
var index=require('./routes/index');
var assignment=require('./routes/assignment');
var bodyParser=require('body-parser');

var mongoURI = "mongodb://localhost:27017/assignments";
var MongoDB = mongoose.connect(mongoURI).connection;

var app=express();

app.use(bodyParser.json());
app.use('/', index);
app.use('/assignments', assignment);
app.use(express.static('server/public'));
//express static.

MongoDB.on('error', function (err) {
    console.log('mongodb connection error:', err);
});

MongoDB.once('open', function () {
  console.log('mongodb connection open!');
});
//put server listener in here:
var server=app.listen(3000, function(){
  var port=server.address().port;
  console.log('listening on port', port, 'press ctrl-c to stop');
})
