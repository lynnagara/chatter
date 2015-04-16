var http = require('http');
var url = require('url');
var path = require('path');
var fs = require('fs');
var websocketserver = require('websocket').server;
var chatterApp = require('./apps/server/chatter.js');

var server = http.createServer(function(req, res) {
	// Serve static files
	if (req.url === '/') {
		req.url = '/index.html';
	}
	fs.readFile(__dirname + '/dist' + req.url, function (err,data) {
    if (err) {
      res.writeHead(404);
      res.end(JSON.stringify(err));
      return;
    }
    
    res.writeHead(200, chatterApp.mimeTypeLookup(req.url));
    res.end(data);
  });
	return;
});
var port = process.env.PORT || 5000;
server.listen(port, function() { });

// create the server
wsServer = new websocketserver({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    chatterApp.websocketHandler(request, wsServer);
});