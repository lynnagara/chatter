import AppDispatcher from '../dispatchers/app-dispatcher.js';
import Constants from '../constants/constants.js';
import {EventEmitter} from 'events';

class Store {

	connectWebsocket() {
		console.log('creating the websocket connection');
		let websocket = new WebSocket('ws://' + location.host, 'echo');
		console.log(websocket) 
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
		    case Constants.CONNECT_WEBSOCKET:
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