import Dispatcher from '../dispatchers/dispatcher.js'

class Actions {
	constructor () {
		super();
	}

	connect () {
		console.log('connecting....');
		// console.log(Store.isConnected())
		// AppDispatcher.handleViewAction();	
		var websocket = new WebSocket('ws://' + location.host, 'echo');
		console.log(websocket)	
		// Move this to Actions/Dispatcher
		websocket.send("Here's some text that the server is urgently awaiting!");
	}

}

export default Actions;