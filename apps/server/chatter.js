var mimeTypeLookup = require('./utilities/utilities.js');
var websocketHandler = require('./websocket/websocket.js');

var chatterApp = {
	mimeTypeLookup: mimeTypeLookup,
	websocketHandler: websocketHandler
}

module.exports = chatterApp;