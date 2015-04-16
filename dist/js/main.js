/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Router = _interopRequire(__webpack_require__(1));

	$(function () {
		new Router();
		Backbone.history.start();
	});

/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var APP = _interopRequire(__webpack_require__(2));

	var Router = (function (_Backbone$Router) {
		function Router() {
			_classCallCheck(this, Router);

			this.routes = {
				"": "home",
				test: "test"
			};
			_get(Object.getPrototypeOf(Router.prototype), "constructor", this).call(this);
		}

		_inherits(Router, _Backbone$Router);

		_createClass(Router, {
			home: {
				value: function home() {
					React.render(React.createElement(APP, null), document.getElementById("app"));
				}
			},
			test: {
				value: function test() {
					console.log("test");
				}
			}
		});

		return Router;
	})(Backbone.Router);

	module.exports = Router;

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Nav = _interopRequire(__webpack_require__(3));

	var JoinChat = _interopRequire(__webpack_require__(4));

	var ChatWindow = _interopRequire(__webpack_require__(5));

	var Conversation = _interopRequire(__webpack_require__(6));

	var UserList = _interopRequire(__webpack_require__(7));

	var UserStore = _interopRequire(__webpack_require__(8));

	var APP = (function (_React$Component) {
		function APP(props) {
			_classCallCheck(this, APP);

			_get(Object.getPrototypeOf(APP.prototype), "constructor", this).call(this, props);
			this._onChange = this._onChange.bind(this);
			this.state = {
				connectedUser: UserStore.getConnectedUser()
			};
		}

		_inherits(APP, _React$Component);

		_createClass(APP, {
			_onChange: {
				value: function _onChange() {
					this.setState({ connectedUser: UserStore.getConnectedUser() });
				}
			},
			componentDidMount: {
				value: function componentDidMount() {
					UserStore.addChangeListener(this._onChange);
				}
			},
			render: {
				value: function render() {
					var connectedUser = this.state.connectedUser;
					var userlist;
					if (this.state.connectedUser) {
						userlist = React.createElement(UserList, null);
					}

					return React.createElement(
						"div",
						null,
						React.createElement(Nav, null),
						React.createElement(
							"div",
							{ className: "row" },
							React.createElement(
								"div",
								{ className: "nine columns", id: "chatColumn" },
								this.state.connectedUser ? React.createElement(
									"div",
									{ className: "conversation-wrap" },
									React.createElement(
										"div",
										{ className: "conversation" },
										React.createElement(Conversation, null)
									),
									React.createElement(
										"div",
										{ className: "add-message" },
										React.createElement(ChatWindow, { user: connectedUser })
									)
								) : React.createElement(JoinChat, null)
							),
							React.createElement(
								"div",
								{ className: "three columns", id: "userColumn" },
								userlist
							)
						)
					);
				}
			}
		});

		return APP;
	})(React.Component);

	module.exports = APP;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Nav = (function (_React$Component) {
		function Nav(props) {
			_classCallCheck(this, Nav);

			_get(Object.getPrototypeOf(Nav.prototype), "constructor", this).call(this, props);
		}

		_inherits(Nav, _React$Component);

		_createClass(Nav, {
			render: {
				value: function render() {
					return React.createElement(
						"nav",
						{ className: "topnav" },
						React.createElement(
							"div",
							{ className: "logo" },
							"Chatter"
						)
					);
				}
			}
		});

		return Nav;
	})(React.Component);

	module.exports = Nav;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Actions = _interopRequire(__webpack_require__(9));

	var UserStore = _interopRequire(__webpack_require__(8));

	var JoinChat = (function (_React$Component) {
		function JoinChat(props) {
			_classCallCheck(this, JoinChat);

			_get(Object.getPrototypeOf(JoinChat.prototype), "constructor", this).call(this, props);
			this._onChange = this._onChange.bind(this);
			this.state = {
				connectedUser: UserStore.getConnectedUser()
			};
		}

		_inherits(JoinChat, _React$Component);

		_createClass(JoinChat, {
			_onChange: {
				value: function _onChange() {
					this.setState({ connectedUser: UserStore.getConnectedUser() });
				}
			},
			componentDidMount: {
				value: function componentDidMount() {
					UserStore.addChangeListener(this._onChange);
				}
			},
			submitForm: {
				value: function submitForm() {
					event.preventDefault();
					if (this.state.username) {
						var act = new Actions();
						act.connectUser({ username: this.state.username });
					}
				}
			},
			handleChangeName: {
				value: function handleChangeName() {
					this.setState({ username: event.target.value });
				}
			},
			render: {
				value: function render() {
					var connectedUser = this.state.connectedUser;
					return React.createElement(
						"form",
						{ onSubmit: this.submitForm.bind(this) },
						React.createElement(
							"div",
							null,
							React.createElement(
								"label",
								null,
								"Join the chat"
							)
						),
						React.createElement(
							"div",
							null,
							React.createElement("input", { type: "text", value: this.state.username, onChange: this.handleChangeName.bind(this), placeholder: "Enter your name" })
						),
						React.createElement(
							"button",
							null,
							"Join Chat"
						)
					);
				}
			}
		});

		return JoinChat;
	})(React.Component);

	module.exports = JoinChat;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Actions = _interopRequire(__webpack_require__(9));

	var UserStore = _interopRequire(__webpack_require__(8));

	var ChatWindow = (function (_React$Component) {
		function ChatWindow(props) {
			_classCallCheck(this, ChatWindow);

			_get(Object.getPrototypeOf(ChatWindow.prototype), "constructor", this).call(this, props);
			this._onChange = this._onChange.bind(this);
			this.state = {
				message: ""
			};
		}

		_inherits(ChatWindow, _React$Component);

		_createClass(ChatWindow, {
			_onChange: {
				value: function _onChange() {}
			},
			componentDidMount: {
				value: function componentDidMount() {}
			},
			submitForm: {
				value: function submitForm() {
					event.preventDefault();
					if (this.state.message && this.state.message.length) {
						var act = new Actions();
						act.postMessage({
							connectedUser: this.props.user,
							message: this.state.message
						});
					}
				}
			},
			handleUpdateMessage: {
				value: function handleUpdateMessage() {
					this.setState({ message: event.target.value });
				}
			},
			render: {
				value: function render() {
					return React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							null,
							"Connected as ",
							React.createElement(
								"strong",
								null,
								this.props.user.username
							)
						),
						React.createElement(
							"form",
							{ onSubmit: this.submitForm.bind(this) },
							React.createElement(
								"div",
								null,
								React.createElement("textarea", { value: this.state.message, onChange: this.handleUpdateMessage.bind(this), placeholder: "Add a message..." }),
								React.createElement(
									"button",
									null,
									"Send message"
								)
							)
						)
					);
				}
			}
		});

		return ChatWindow;
	})(React.Component);

	module.exports = ChatWindow;

	// this.setState({message: ''});

	// UserStore.addChangeListener(this._onChange);

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var UserStore = _interopRequire(__webpack_require__(8));

	var Conversation = (function (_React$Component) {
		function Conversation(props) {
			_classCallCheck(this, Conversation);

			_get(Object.getPrototypeOf(Conversation.prototype), "constructor", this).call(this, props);
			this._onChange = this._onChange.bind(this);
			this.state = {
				messages: UserStore.getMessages()
			};
		}

		_inherits(Conversation, _React$Component);

		_createClass(Conversation, {
			_onChange: {
				value: function _onChange() {
					this.setState({ messages: UserStore.getMessages() });
				}
			},
			componentDidMount: {
				value: function componentDidMount() {
					UserStore.addChangeListener(this._onChange);
				}
			},
			render: {
				value: function render() {
					var messages = this.state.messages;
					var messageList;
					if (!messages.length) {
						messageList = React.createElement(
							"div",
							null,
							"Start the conversation..."
						);
					} else {
						var listitems = messages.map(function (message) {
							return React.createElement(
								"li",
								{ key: message.key },
								message.message,
								" = ",
								message.username
							);
						});
						messageList = React.createElement(
							"ul",
							null,
							listitems
						);
					}

					return React.createElement(
						"div",
						null,
						messageList
					);
				}
			}
		});

		return Conversation;
	})(React.Component);

	module.exports = Conversation;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var UserStore = _interopRequire(__webpack_require__(8));

	var UserList = (function (_React$Component) {
		function UserList(props) {
			_classCallCheck(this, UserList);

			_get(Object.getPrototypeOf(UserList.prototype), "constructor", this).call(this, props);
			this._onChange = this._onChange.bind(this);
			this.state = {
				users: UserStore.getUserlist()
			};
		}

		_inherits(UserList, _React$Component);

		_createClass(UserList, {
			_onChange: {
				value: function _onChange() {
					this.setState({ users: UserStore.getUserlist() });
				}
			},
			componentDidMount: {
				value: function componentDidMount() {
					UserStore.addChangeListener(this._onChange);
				}
			},
			render: {
				value: function render() {
					var users = this.state.users;
					var userList;

					if (!users.length) {
						userList = React.createElement(
							"div",
							null,
							"No users online right now"
						);
					} else {
						var listitems = users.map(function (user) {
							return React.createElement(
								"li",
								{ key: user },
								user
							);
						});
						userList = React.createElement(
							"ul",
							null,
							listitems
						);
					}

					return React.createElement(
						"div",
						null,
						React.createElement(
							"div",
							null,
							"People online now"
						),
						userList
					);
				}
			}
		});

		return UserList;
	})(React.Component);

	module.exports = UserList;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _get = function get(object, property, receiver) { var desc = Object.getOwnPropertyDescriptor(object, property); if (desc === undefined) { var parent = Object.getPrototypeOf(object); if (parent === null) { return undefined; } else { return get(parent, property, receiver); } } else if ("value" in desc && desc.writable) { return desc.value; } else { var getter = desc.get; if (getter === undefined) { return undefined; } return getter.call(receiver); } };

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var AppDispatcher = _interopRequire(__webpack_require__(10));

	var Constants = _interopRequire(__webpack_require__(11));

	var EventEmitter = __webpack_require__(13).EventEmitter;

	var WebAPIUtils = _interopRequire(__webpack_require__(12));

	var _connectWebsocket = function (username) {
		WebAPIUtils.connectWebsocket(username);
	};

	var _userList = [];
	var _messages = [];

	var _connectedUser = null;

	var _updateUserList = function (users) {
		_userList = users;
	};

	var _updateConnectedUser = function (connectedUser) {
		_connectedUser = connectedUser;
	};

	var _postUserMessage = function (username, message) {
		WebAPIUtils.postUserMessage(username, message);
	};

	var _newMessageAvailable = function (username, message) {
		_messages.push({ username: username, message: message, key: _messages.length });
	};

	var UserStore = function UserStore(props) {
		var _this = this;

		_classCallCheck(this, UserStore);

		var CHANGE_EVENT = "change";

		Object.assign(this, EventEmitter.prototype, {
			emitChange: function () {
				_this.emit(CHANGE_EVENT);
			},

			addChangeListener: function (callback) {
				_this.on("change", callback);
			},

			removeChangeListener: function (callback) {
				console.log("stop listening...");
				_this.removeListener("change", callback);
			},

			getUserlist: function () {
				return _userList;
			},

			getMessages: function () {
				return _messages;
			},

			getConnectedUser: function () {
				return _connectedUser;
			}

		});

		AppDispatcher.register(function (action) {
			switch (action.actionType) {
				case Constants.CONNECT_USER:
					var username = action.data.username.trim();
					if (username !== "") {
						_connectWebsocket(username);
					}
					_this.emitChange();
					// Store.emitChange();
					break;
				case Constants.USER_CONNECTION_SUCCESS:
					_this.emitChange();
					break;
				case Constants.USER_CONNECTION_FAILURE:
					console.log("user connection failure");
					_this.emitChange();
					break;
				case Constants.USER_CONNECTION_DISCONNECTED:
					console.log("user connection disconnected");
					_this.emitChange();
					break;
				case Constants.USER_JOINED_CHAT:
					if (!_connectedUser) {
						_updateUserList(action.data.usernames);
						_updateConnectedUser(action.data.connectedUser);
						_this.emitChange();
					}
					break;
				case Constants.UPDATE_USER_LIST:
					_updateUserList(action.data.usernames);
					_this.emitChange();
					break;
				case Constants.POST_USER_MESSAGE:
					_postUserMessage(action.data.user, action.data.message);
					break;
				case Constants.NEW_MESSAGE_AVAILABLE:
					_newMessageAvailable(action.data.username, action.data.message);
					_this.emitChange();
					break;
				default:
				// nada
			}
		});
		_get(Object.getPrototypeOf(UserStore.prototype), "constructor", this).call(this, props);
	};

	var userstore = new UserStore();

	module.exports = userstore;

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var AppDispatcher = _interopRequire(__webpack_require__(10));

	var Constants = _interopRequire(__webpack_require__(11));

	var Actions = (function () {
		function Actions() {
			_classCallCheck(this, Actions);
		}

		_createClass(Actions, {
			connectUser: {
				value: function connectUser(data) {
					AppDispatcher.handleViewAction({
						actionType: Constants.CONNECT_USER,
						username: data.username
					});
				}
			},
			postMessage: {
				value: function postMessage(data) {
					AppDispatcher.handleViewAction({
						actionType: Constants.POST_USER_MESSAGE,
						user: data.connectedUser.username,
						message: data.message
					});
				}
			},
			userConnectionSuccess: {
				value: function userConnectionSuccess() {
					AppDispatcher.handleServerAction({
						actionType: Constants.USER_CONNECTION_SUCCESS,
						user: "test user"
					});
				}
			},
			updateUserList: {
				value: function updateUserList(data) {
					AppDispatcher.handleServerAction({
						actionType: Constants.UPDATE_USER_LIST,
						usernames: data.usernames
					});
				}
			},
			userConnectionFailure: {
				value: function userConnectionFailure() {
					AppDispatcher.handleServerAction({
						actionType: Constants.USER_CONNECTION_FAILURE
					});
				}
			},
			userConnectionDisconnected: {
				value: function userConnectionDisconnected() {}
			},
			userJoinedChat: {
				value: function userJoinedChat(data) {
					AppDispatcher.handleServerAction({
						actionType: Constants.USER_JOINED_CHAT,
						usernames: data.usernames,
						connectedUser: data.connectedUser
					});
				}
			},
			newMessageAvailable: {
				value: function newMessageAvailable(data) {
					AppDispatcher.handleServerAction({
						actionType: Constants.NEW_MESSAGE_AVAILABLE,
						username: data.username,
						message: data.message
					});
				}
			}
		});

		return Actions;
	})();

	module.exports = Actions;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var Constants = _interopRequire(__webpack_require__(11));

	var Dispatcher = __webpack_require__(14).Dispatcher;

	var PayloadSources = Constants.PayloadSources;

	var AppDispatcher = Object.assign(new Dispatcher(), {

	  handleServerAction: function handleServerAction(action) {
	    var payload = {
	      actionType: action.actionType,
	      data: action
	    };
	    this.dispatch(payload);
	  },

	  handleViewAction: function handleViewAction(action) {
	    var payload = {
	      actionType: action.actionType,
	      data: action
	    };
	    this.dispatch(payload);
	  }

	});

	module.exports = AppDispatcher;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var keyMirror = _interopRequire(__webpack_require__(15));

	module.exports = keyMirror({
		// View actions
		CONNECT_USER: null,
		POST_USER_MESSAGE: null,
		// Server actions
		USER_CONNECTION_SUCCESS: null,
		USER_CONNECTION_FAILURE: null,
		USER_CONNECTION_DISCONNECTED: null,
		USER_JOINED_CHAT: null,
		NEW_MESSAGE_AVAILABLE: null,
		UPDATE_USER_LIST: null
	});

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var _interopRequire = function (obj) { return obj && obj.__esModule ? obj["default"] : obj; };

	var _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

	var _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

	var Actions = _interopRequire(__webpack_require__(9));

	var WebAPIUtils = (function () {
		function WebAPIUtils() {
			_classCallCheck(this, WebAPIUtils);
		}

		_createClass(WebAPIUtils, {
			connectWebsocket: {
				value: function connectWebsocket(username) {
					var _this = this;

					this.ws = new WebSocket("ws://" + location.host);
					this.ws.onopen = function (event) {
						// Check if the username is valid
						_this.ws.send(JSON.stringify({ username: username, action: "setUsername" }));

						var act = new Actions();
						act.userConnectionSuccess();
					};
					this.ws.onerror = function (error) {
						var act = new Actions();
						act.userConnectionFailure();
					};
					this.ws.onmessage = function (data) {
						var message = JSON.parse(data.data);
						if (message.action) {
							switch (message.action) {
								case "joinedChat":
									var act = new Actions();
									act.userJoinedChat(message.data);
									break;
								case "updatedUsers":
									var act = new Actions();
									act.updateUserList(message.data);
									break;
								case "newMessageAvailable":
									var act = new Actions();
									act.newMessageAvailable(message.data);
								default:
								// nada
							}
						}
					};
				}
			},
			postUserMessage: {
				value: function postUserMessage(username, message) {
					if (this.ws) {
						this.ws.send(JSON.stringify({ username: username, message: message, action: "postUserMessage" }));
					}
				}
			}
		});

		return WebAPIUtils;
	})();

	var webapiutils = new WebAPIUtils();

	module.exports = webapiutils;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function (n) {
	  if (!isNumber(n) || n < 0 || isNaN(n)) throw TypeError("n must be a positive number");
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function (type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events) this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === "error") {
	    if (!this._events.error || isObject(this._events.error) && !this._events.error.length) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError("Uncaught, unspecified \"error\" event.");
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler)) return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        len = arguments.length;
	        args = new Array(len - 1);
	        for (i = 1; i < len; i++) args[i - 1] = arguments[i];
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    len = arguments.length;
	    args = new Array(len - 1);
	    for (i = 1; i < len; i++) args[i - 1] = arguments[i];

	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++) listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function (type, listener) {
	  var m;

	  if (!isFunction(listener)) throw TypeError("listener must be a function");

	  if (!this._events) this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener) this.emit("newListener", type, isFunction(listener.listener) ? listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    var m;
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error("(node) warning: possible EventEmitter memory " + "leak detected. %d listeners added. " + "Use emitter.setMaxListeners() to increase limit.", this._events[type].length);
	      if (typeof console.trace === "function") {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function (type, listener) {
	  if (!isFunction(listener)) throw TypeError("listener must be a function");

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function (type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener)) throw TypeError("listener must be a function");

	  if (!this._events || !this._events[type]) return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener || isFunction(list.listener) && list.listener === listener) {
	    delete this._events[type];
	    if (this._events.removeListener) this.emit("removeListener", type, listener);
	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener || list[i].listener && list[i].listener === listener) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0) return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener) this.emit("removeListener", type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function (type) {
	  var key, listeners;

	  if (!this._events) return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0) this._events = {};else if (this._events[type]) delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === "removeListener") continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners("removeListener");
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else {
	    // LIFO order
	    while (listeners.length) this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function (type) {
	  var ret;
	  if (!this._events || !this._events[type]) ret = [];else if (isFunction(this._events[type])) ret = [this._events[type]];else ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.listenerCount = function (emitter, type) {
	  var ret;
	  if (!emitter._events || !emitter._events[type]) ret = 0;else if (isFunction(emitter._events[type])) ret = 1;else ret = emitter._events[type].length;
	  return ret;
	};

	function isFunction(arg) {
	  return typeof arg === "function";
	}

	function isNumber(arg) {
	  return typeof arg === "number";
	}

	function isObject(arg) {
	  return typeof arg === "object" && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 */

	module.exports.Dispatcher = __webpack_require__(16);

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Constructs an enumeration with keys equal to their value.
	 *
	 * For example:
	 *
	 *   var COLORS = keyMirror({blue: null, red: null});
	 *   var myColor = COLORS.blue;
	 *   var isColorValid = !!COLORS[myColor];
	 *
	 * The last line could not be performed if the values of the generated enum were
	 * not equal to their keys.
	 *
	 *   Input:  {key1: val1, key2: val2}
	 *   Output: {key1: key1, key2: key2}
	 *
	 * @param {object} obj
	 * @return {object}
	 */
	var keyMirror = function keyMirror(obj) {
	  var ret = {};
	  var key;
	  if (!(obj instanceof Object && !Array.isArray(obj))) {
	    throw new Error("keyMirror(...): Argument must be an object.");
	  }
	  for (key in obj) {
	    if (!obj.hasOwnProperty(key)) {
	      continue;
	    }
	    ret[key] = key;
	  }
	  return ret;
	};

	module.exports = keyMirror;
	/**
	 * Copyright 2013-2014 Facebook, Inc.
	 *
	 * Licensed under the Apache License, Version 2.0 (the "License");
	 * you may not use this file except in compliance with the License.
	 * You may obtain a copy of the License at
	 *
	 * http://www.apache.org/licenses/LICENSE-2.0
	 *
	 * Unless required by applicable law or agreed to in writing, software
	 * distributed under the License is distributed on an "AS IS" BASIS,
	 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
	 * See the License for the specific language governing permissions and
	 * limitations under the License.
	 *
	 */

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	var invariant = __webpack_require__(17);

	var _lastID = 1;
	var _prefix = "ID_";

	/**
	 * Dispatcher is used to broadcast payloads to registered callbacks. This is
	 * different from generic pub-sub systems in two ways:
	 *
	 *   1) Callbacks are not subscribed to particular events. Every payload is
	 *      dispatched to every registered callback.
	 *   2) Callbacks can be deferred in whole or part until other callbacks have
	 *      been executed.
	 *
	 * For example, consider this hypothetical flight destination form, which
	 * selects a default city when a country is selected:
	 *
	 *   var flightDispatcher = new Dispatcher();
	 *
	 *   // Keeps track of which country is selected
	 *   var CountryStore = {country: null};
	 *
	 *   // Keeps track of which city is selected
	 *   var CityStore = {city: null};
	 *
	 *   // Keeps track of the base flight price of the selected city
	 *   var FlightPriceStore = {price: null}
	 *
	 * When a user changes the selected city, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'city-update',
	 *     selectedCity: 'paris'
	 *   });
	 *
	 * This payload is digested by `CityStore`:
	 *
	 *   flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'city-update') {
	 *       CityStore.city = payload.selectedCity;
	 *     }
	 *   });
	 *
	 * When the user selects a country, we dispatch the payload:
	 *
	 *   flightDispatcher.dispatch({
	 *     actionType: 'country-update',
	 *     selectedCountry: 'australia'
	 *   });
	 *
	 * This payload is digested by both stores:
	 *
	 *    CountryStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       CountryStore.country = payload.selectedCountry;
	 *     }
	 *   });
	 *
	 * When the callback to update `CountryStore` is registered, we save a reference
	 * to the returned token. Using this token with `waitFor()`, we can guarantee
	 * that `CountryStore` is updated before the callback that updates `CityStore`
	 * needs to query its data.
	 *
	 *   CityStore.dispatchToken = flightDispatcher.register(function(payload) {
	 *     if (payload.actionType === 'country-update') {
	 *       // `CountryStore.country` may not be updated.
	 *       flightDispatcher.waitFor([CountryStore.dispatchToken]);
	 *       // `CountryStore.country` is now guaranteed to be updated.
	 *
	 *       // Select the default city for the new country
	 *       CityStore.city = getDefaultCityForCountry(CountryStore.country);
	 *     }
	 *   });
	 *
	 * The usage of `waitFor()` can be chained, for example:
	 *
	 *   FlightPriceStore.dispatchToken =
	 *     flightDispatcher.register(function(payload) {
	 *       switch (payload.actionType) {
	 *         case 'country-update':
	 *           flightDispatcher.waitFor([CityStore.dispatchToken]);
	 *           FlightPriceStore.price =
	 *             getFlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *
	 *         case 'city-update':
	 *           FlightPriceStore.price =
	 *             FlightPriceStore(CountryStore.country, CityStore.city);
	 *           break;
	 *     }
	 *   });
	 *
	 * The `country-update` payload will be guaranteed to invoke the stores'
	 * registered callbacks in order: `CountryStore`, `CityStore`, then
	 * `FlightPriceStore`.
	 */

	function Dispatcher() {
	  this.$Dispatcher_callbacks = {};
	  this.$Dispatcher_isPending = {};
	  this.$Dispatcher_isHandled = {};
	  this.$Dispatcher_isDispatching = false;
	  this.$Dispatcher_pendingPayload = null;
	}

	/**
	 * Registers a callback to be invoked with every dispatched payload. Returns
	 * a token that can be used with `waitFor()`.
	 *
	 * @param {function} callback
	 * @return {string}
	 */
	Dispatcher.prototype.register = function (callback) {
	  var id = _prefix + _lastID++;
	  this.$Dispatcher_callbacks[id] = callback;
	  return id;
	};

	/**
	 * Removes a callback based on its token.
	 *
	 * @param {string} id
	 */
	Dispatcher.prototype.unregister = function (id) {
	  invariant(this.$Dispatcher_callbacks[id], "Dispatcher.unregister(...): `%s` does not map to a registered callback.", id);
	  delete this.$Dispatcher_callbacks[id];
	};

	/**
	 * Waits for the callbacks specified to be invoked before continuing execution
	 * of the current callback. This method should only be used by a callback in
	 * response to a dispatched payload.
	 *
	 * @param {array<string>} ids
	 */
	Dispatcher.prototype.waitFor = function (ids) {
	  invariant(this.$Dispatcher_isDispatching, "Dispatcher.waitFor(...): Must be invoked while dispatching.");
	  for (var ii = 0; ii < ids.length; ii++) {
	    var id = ids[ii];
	    if (this.$Dispatcher_isPending[id]) {
	      invariant(this.$Dispatcher_isHandled[id], "Dispatcher.waitFor(...): Circular dependency detected while " + "waiting for `%s`.", id);
	      continue;
	    }
	    invariant(this.$Dispatcher_callbacks[id], "Dispatcher.waitFor(...): `%s` does not map to a registered callback.", id);
	    this.$Dispatcher_invokeCallback(id);
	  }
	};

	/**
	 * Dispatches a payload to all registered callbacks.
	 *
	 * @param {object} payload
	 */
	Dispatcher.prototype.dispatch = function (payload) {
	  invariant(!this.$Dispatcher_isDispatching, "Dispatch.dispatch(...): Cannot dispatch in the middle of a dispatch.");
	  this.$Dispatcher_startDispatching(payload);
	  try {
	    for (var id in this.$Dispatcher_callbacks) {
	      if (this.$Dispatcher_isPending[id]) {
	        continue;
	      }
	      this.$Dispatcher_invokeCallback(id);
	    }
	  } finally {
	    this.$Dispatcher_stopDispatching();
	  }
	};

	/**
	 * Is this Dispatcher currently dispatching.
	 *
	 * @return {boolean}
	 */
	Dispatcher.prototype.isDispatching = function () {
	  return this.$Dispatcher_isDispatching;
	};

	/**
	 * Call the callback stored with the given id. Also do some internal
	 * bookkeeping.
	 *
	 * @param {string} id
	 * @internal
	 */
	Dispatcher.prototype.$Dispatcher_invokeCallback = function (id) {
	  this.$Dispatcher_isPending[id] = true;
	  this.$Dispatcher_callbacks[id](this.$Dispatcher_pendingPayload);
	  this.$Dispatcher_isHandled[id] = true;
	};

	/**
	 * Set up bookkeeping needed when dispatching.
	 *
	 * @param {object} payload
	 * @internal
	 */
	Dispatcher.prototype.$Dispatcher_startDispatching = function (payload) {
	  for (var id in this.$Dispatcher_callbacks) {
	    this.$Dispatcher_isPending[id] = false;
	    this.$Dispatcher_isHandled[id] = false;
	  }
	  this.$Dispatcher_pendingPayload = payload;
	  this.$Dispatcher_isDispatching = true;
	};

	/**
	 * Clear bookkeeping used for dispatching.
	 *
	 * @internal
	 */
	Dispatcher.prototype.$Dispatcher_stopDispatching = function () {
	  this.$Dispatcher_pendingPayload = null;
	  this.$Dispatcher_isDispatching = false;
	};

	module.exports = Dispatcher;
	/*
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule Dispatcher
	 * @typechecks
	 */

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	/**
	 * Use invariant() to assert state which your program assumes to be true.
	 *
	 * Provide sprintf-style format (only %s is supported) and arguments
	 * to provide information about what broke and what you were
	 * expecting.
	 *
	 * The invariant message will be stripped in production, but the invariant
	 * will remain to ensure logic does not differ in production.
	 */

	var invariant = function invariant(condition, format, a, b, c, d, e, f) {
	  if (false) {
	    if (format === undefined) {
	      throw new Error("invariant requires an error message argument");
	    }
	  }

	  if (!condition) {
	    var error;
	    if (format === undefined) {
	      error = new Error("Minified exception occurred; use the non-minified dev environment " + "for the full error message and additional helpful warnings.");
	    } else {
	      var args = [a, b, c, d, e, f];
	      var argIndex = 0;
	      error = new Error("Invariant Violation: " + format.replace(/%s/g, function () {
	        return args[argIndex++];
	      }));
	    }

	    error.framesToPop = 1; // we don't care about invariant's own frame
	    throw error;
	  }
	};

	module.exports = invariant;
	/**
	 * Copyright (c) 2014, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule invariant
	 */

/***/ }
/******/ ]);