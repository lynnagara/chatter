var connectedClients = [];

function getUsernames(connectedClients) {
  return connectedClients.map(function(client) {return client.username});
}

function setUsername(username, ws, connection) {
	var userObj = { username:username, ws: ws, connection:connection };
	var usernames = getUsernames(connectedClients);

	// Check if the username is in use
	if (usernames.indexOf(userObj.username) > -1) {
		// The username is in use
		// Return an error message and close the connection
		console.log('the username is taken')
    connection.close();
	} else {
		// Continue on...
		connectedClients.push(userObj);
    connection.sendUTF(
      JSON.stringify({
        action:'joinedChat', 
        data: {
          usernames: getUsernames(connectedClients),
          connectedUser: {username:username}
        }
      })
    );

    // rebroadcast command to all other clients
    connectedClients.forEach(function(client) {
      if (client.connection !== connection) {
        client.connection.sendUTF(JSON.stringify({action: 'updatedUsers', data: {usernames: getUsernames(connectedClients)}}));
      }
    });

	}
}


var websocketHandler = function (request, ws) {

    var connection = request.accept(null, request.origin);

    // This is the most important callback for us, we'll handle
    // all messages from users here.
    connection.on('message', function(message) {
      if (message.type === 'utf8') {
  			var data = JSON.parse(message.utf8Data);
  			switch (data.action) {                
  				case 'setUsername':
  					setUsername(data.username, ws, connection);
  					break;
  				case 'sendMessage':
  					break;
  				default:
  					// nada
  			}

      }
    });

   // connection.on('frame', function(frame) {
   //      console.log('Frame: 0x' + frame.opcode.toString(16) + '; ' + frame.length + ' bytes; Flags: ' + renderFlags(frame));
   //      messageSize += frame.length;
   //      if (frame.fin) {
   //          console.log('Total message size: ' + messageSize + ' bytes.');
   //          logThroughput(messageSize);
   //          messageSize = 0;
   //          requestData();
   //      }
   //  });



    connection.on('close', function(connection) {
        // close user connection
        console.log('the connection was closed')
    });




}

module.exports = websocketHandler;