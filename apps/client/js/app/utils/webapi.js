class WebAPIUtils {

	constructor() {
		
	}

	connectWebsocket() {
		console.log('creating the websocket connection...');
		var ws = new WebSocket('ws://' + location.host);
		ws.onopen = function(event) {
			console.log('connected to ' + event.currentTarget.URL)
		};
		ws.onerror = function(error) {
		  console.log('WebSocket Error: ' + error);
		};

	}

}

export default WebAPIUtils;