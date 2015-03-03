import Actions from '../actions/actions.js';

class WebAPIUtils {

	constructor() {

	}

	connectWebsocket(username) {
		var ws = new WebSocket('ws://' + location.host);
		ws.onopen = (event) => {
			// Check if the username is valid
			ws.send(JSON.stringify({username: username, action: 'setUsername'}));

			var act = new Actions();
			act.userConnectionSuccess();
		};
		ws.onerror = (error) => {
			var act = new Actions();
			act.userConnectionFailure();
		};
		ws.onmessage = (data) => {
			var message = JSON.parse(data.data);
			if (message.action) {
				switch (message.action) {
					case 'joinedChat':
						var act = new Actions();
						act.userJoinedChat();
						break;
					case 'updatedUsers':
						var act = new Actions();
						act.updateUserList();
						break;
				default:
					// nada
				}				
			}
		}


	}

}

export default WebAPIUtils;