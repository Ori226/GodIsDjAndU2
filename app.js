
var express = require('express');
var my_dal = require('./dal');
var bodyParser = require('body-parser');
var app = express();
var logger = require('tracer').console();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

app.all('*', function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Methods', 'PUT, GET, POST, DELETE, OPTIONS');
  res.header('Access-Control-Allow-Headers', 'Content-Type');
  next();
});


app.get('/', function (req, res) {
  res.send('Hello World!');
});


app.get('/getLeaderStatus/', function (req, res) {
  console.log("got_message");
  my_dal.getUserState(req.query.userId, function (data)
  {
    console.log("answering " + JSON.stringify(data))
    res.send(data);
  });
});


app.post('/updateLeaderStatus/', function (req, res) {

  logger.log(req.body.player_state.state);
  console.log(req.body.userId + "_" + req.body.player_state);
  my_dal.updateLeaderState(req.body.userId, req.body.player_state);
  res.send("ok");
});



app.post('/updateLeaderPlaylist/', function (req, res) {


  console.log(req.body.userId + "_" + req.body.playlist);
  my_dal.updateLeaderPlaylist(req.body.userId, req.body.playlist);

  res.send("ok");
});


app.get('/getLeaderPlaylist/', function (req, res) {

  console.log(req.query.userId + "_" + req.query.youtube_url);
  my_dal.getLeaderPlaylist(req.query.userId, function(playlist){
    res.send(playlist);
  });

});



var server = app.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});