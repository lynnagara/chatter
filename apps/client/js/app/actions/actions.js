import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';

class Actions {
	constructor () {

	}

	connect (text) {
		AppDispatcher.handleViewAction({
      actionType: Constants.CONNECT_WEBSOCKET,
      text: 'This is my text'
    });
	}
}

export default Actions;