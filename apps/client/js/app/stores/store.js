import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';
import {EventEmitter} from 'events';
import WebAPIUtils from '../utils/webapi.js';

class Store {

	connectWebsocket(text) {
		var apiCall = new WebAPIUtils();
		apiCall.connectWebsocket(text);
	}

	constructor () {
		let CHANGE_EVENT = 'change';
		Object.assign(this, EventEmitter.prototype, {
			emitChange: function() {
				this.emit(CHANGE_EVENT);
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
		      break;
		    default:
		      // nada
		  }
		});

	}
}

export default Store;