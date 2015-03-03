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
		ws.onmessage = (message) =>{
			console.log(message.data);    
		}


	}

}

export default WebAPIUtils;