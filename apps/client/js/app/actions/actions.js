import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';

class Actions {
	constructor () {

	}

	connectUser (username) {
		AppDispatcher.handleViewAction({
      actionType: Constants.CONNECT_USER,
      text: username
    });
	}

	userConnectionSuccess () {
		AppDispatcher.handleServerAction({
      actionType: Constants.USER_CONNECTION_SUCCESS,
      user: 'test user'
    });
	}

	userConnectionFailure () {
		AppDispatcher.handleServerAction({
      actionType: Constants.USER_CONNECTION_FAILURE
    });
	}

	userConnectionDisconnected () {

	}

	userJoinedChat () {
		AppDispatcher.handleServerAction({
      actionType: Constants.USER_JOINED_CHAT
    });
	}

	updateUserList () {

	}

}

export default Actions;