import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';

class Actions {
	constructor () {

	}

	connectUser (data) {
		AppDispatcher.handleViewAction({
      actionType: Constants.CONNECT_USER,
      username: data.username
    });
	}

	postMessage (data) {
		AppDispatcher.handleViewAction({
      actionType: Constants.POST_USER_MESSAGE,
      user: data.connectedUser.username,
      message: data.message
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

	userJoinedChat (data) {
		AppDispatcher.handleServerAction({
      actionType: Constants.USER_JOINED_CHAT,
      usernames: data.usernames,
      connectedUser: data.connectedUser
    });
	}

	newMessageAvailable (data) {
		AppDispatcher.handleServerAction({
			actionType: Constants.NEW_MESSAGE_AVAILABLE,
			username: data.username,
			message: data.message
		});		
	}

}

export default Actions;