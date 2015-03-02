var websocketHandler = function (message) {
  var data = JSON.parse(message.utf8Data);

		switch (data.action) {                
			case 'setUsername':
				console.log('set username action')
				break;
			case 'sendMessage':
				break;
			default:
			// nada
	}

}

module.exports = websocketHandler;