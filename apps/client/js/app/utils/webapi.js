import Actions from '../actions/actions.js';

class WebAPIUtils {

	constructor() {
	}

	connectWebsocket(username) {
		this.ws = new WebSocket('ws://' + location.host);
		this.ws.onopen = (event) => {
			// Check if the username is valid
			this.ws.send(JSON.stringify({username: username, action: 'setUsername'}));

			var act = new Actions();
			act.userConnectionSuccess();
		};
		this.ws.onerror = (error) => {
			var act = new Actions();
			act.userConnectionFailure();
		};
		this.ws.onmessage = (data) => {
			var message = JSON.parse(data.data);
			if (message.action) {
				switch (message.action) {
					case 'joinedChat':
						var act = new Actions();
						act.userJoinedChat(message.data);
						break;
					case 'updatedUsers':
						var act = new Actions();
						act.updateUserList(message.data);
						break;
					case 'newMessageAvailable':
						var act = new Actions();
						act.newMessageAvailable(message.data);
				default:
					// nada
				}				
			}
		}
	}

	postUserMessage(username, message) {
		if (this.ws) {
			this.ws.send(JSON.stringify({username: username, message: message, action: 'postUserMessage'}));			
		}
	}

}

var webapiutils = new WebAPIUtils();

export default webapiutils;