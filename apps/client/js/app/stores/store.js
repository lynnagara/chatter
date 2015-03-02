import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';
import {EventEmitter} from 'events';
import WebAPIUtils from '../utils/webapi.js';

class Store {

	connectWebsocket (text) {
		var apiCall = new WebAPIUtils();
		apiCall.connectWebsocket(text);
	}

	connectedUser () {
		return 'lyn';
	}

	constructor (props) {
		let CHANGE_EVENT = 'change';
		Object.assign(this, EventEmitter.prototype, {
			emitChange: function() {
				console.log('emit change...')
				this.emit(CHANGE_EVENT);
			},

			addChangeListener: function (callback) {
				console.log('listening...')
				this.on('change', callback);
			},

			removeChangeListener: function (callback) {
				console.log('stop listening...')
				this.removeListener('change', callback);
			}
		});

		AppDispatcher.register(action => {
		  var text;
		  switch(action.actionType) {
				case Constants.CONNECT_USER:
					text = action.text.trim();
					if (text !== '') {
						this.connectWebsocket(text);
					}
					this.emitChange();
					// Store.emitChange();
					break;
				case Constants.USER_CONNECTION_SUCCESS:
					console.log('user connection success')
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
		    default:
		      // nada
		  }
		});
		super(props);
	}
}

export default Store;