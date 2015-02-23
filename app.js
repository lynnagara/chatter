var express = require('express');
var app = express();
var expressWs = require('express-ws')(app);

// Import modules
// var test = require('./apps/server/test');

app.use(express.static(__dirname + '/dist'));

app.get('/', function (req, res) {
	var uid = req.params.uid;
	var path = req.params[0] ? req.params[0] : 'index.html';
	res.sendFile(path);
});

app.post('/chat', function (req, res) {
	console.log('create a chat')
  res.send('Create a chat room and return its slug');
});

app.ws('/echo', function(ws, req) {

	ws.on('message', function(msg) {
		ws.send(msg);
	});
});

app.listen(5000, function () {
	console.log('listening on 5000');
});

