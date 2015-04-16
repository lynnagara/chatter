import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';
import {EventEmitter} from 'events';
import WebAPIUtils from '../utils/webapi.js';


var _connectWebsocket = (username) => {
	WebAPIUtils.connectWebsocket(username);
}

var _userList = [];
var _messages = [];

var _connectedUser = null;

var _updateUserList = (users) => {
	_userList = users;
}

var _updateConnectedUser = (connectedUser) => {
	_connectedUser = connectedUser;
}

var _postUserMessage = (username, message) => {
	WebAPIUtils.postUserMessage(username, message);
}

var _newMessageAvailable = (username, message) => {
	_messages.push({username:username, message:message, key:_messages.length});
}



class UserStore {

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
			},

			getMessages: () => {
				return _messages;
			},

			getConnectedUser: () => {
				return _connectedUser;
			}

		});

		AppDispatcher.register(action => {
		  switch(action.actionType) {
				case Constants.CONNECT_USER:
					var username = action.data.username.trim();
					if (username !== '') {
						_connectWebsocket(username);
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
					if (!_connectedUser) {
						_updateUserList(action.data.usernames);
						_updateConnectedUser(action.data.connectedUser);
						this.emitChange();
					}
					break;
				case Constants.UPDATE_USER_LIST:
					_updateUserList(action.data.usernames);
					this.emitChange();
					break;
				case Constants.POST_USER_MESSAGE:
					_postUserMessage(action.data.user, action.data.message);
					break;
				case Constants.NEW_MESSAGE_AVAILABLE:
					_newMessageAvailable(action.data.username, action.data.message);
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