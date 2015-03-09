import keyMirror from 'keymirror';

module.exports = keyMirror({
	// View actions
	CONNECT_USER: null,
	POST_USER_MESSAGE: null,
	// Server actions
	USER_CONNECTION_SUCCESS: null,
	USER_CONNECTION_FAILURE: null,
	USER_CONNECTION_DISCONNECTED: null,
	USER_JOINED_CHAT: null,
	NEW_MESSAGE_AVAILABLE: null
});