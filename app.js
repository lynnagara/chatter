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
server.listen(5000, function() { });

// create the server
wsServer = new websocketserver({
    httpServer: server
});

// WebSocket server
wsServer.on('request', function(request) {
    var connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
        if (message.type === 'utf8') {
            chatterApp.websocketHandler(message);

        }
    });

    connection.on('close', function(connection) {
        // close user connection
    });
});