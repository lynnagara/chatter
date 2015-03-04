import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';
import {EventEmitter} from 'events';
import WebAPIUtils from '../utils/webapi.js';


var _connectWebsocket = (text) => {
	var apiCall = new WebAPIUtils();
	apiCall.connectWebsocket(text);
}

var _userList = []

var _updateUserList = (users) => {
	_userList = users;
}


class UserStore {

	connectedUser () {
		return 'lyn';
	}

	constructor (props) {
		let CHANGE_EVENT = 'change';

		Object.assign(this, EventEmitter.prototype, {
			emitChange: () => {
				this.emit(CHANGE_EVENT);
			},

			addChangeListener: (callback) => {
				this.on('change', callback);
			},

			removeChangeListener: (callback) => {
				console.log('stop listening...')
				this.removeListener('change', callback);
			},

			getUserlist: () => {
				return _userList;
			}

		});

		AppDispatcher.register(action => {
		  var text;
		  switch(action.actionType) {
				case Constants.CONNECT_USER:
					text = action.text.trim();
					if (text !== '') {
						_connectWebsocket(text);
					}
					this.emitChange();
					// Store.emitChange();
					break;
				case Constants.USER_CONNECTION_SUCCESS:
					this.emitChange();
					break;
				case Constants.USER_CONNECTION_FAILURE:
					console.log('user connection failure')
					this.emitChange();
					break;
				case Constants.USER_CONNECTION_DISCONNECTED:
					console.log('user connection disconnected')
					this.emitChange();
					break;
				case Constants.USER_JOINED_CHAT:
					_updateUserList(action.data.usernames);
					this.emitChange();
					break;
		    default:
		      // nada
		  }
		});
		super(props);
	}
}

var userstore = new UserStore();

export default userstore;