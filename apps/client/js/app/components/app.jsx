import Nav from './nav.jsx';
import JoinChat from './joinchat.jsx';
import ChatWindow from './chatwindow.jsx';
import UserList from './userlist.jsx';
import Store from '../stores/store';


class APP extends React.Component {

	// Method to retrieve application state from store
	getAppState () {
		console.log('====')
	  return {
	  	connectedUser: 'lyn'
	  };
	}

	constructor(props) {
		this.state = {
			connectedUser: null
		}
		// this.state = this.getAppState();
		// super(props);
	}

	_onChange () {
    // this.setState(getAppState());
  }

  componentDidMount () {
  	// this.store = new Store();
		var store = new Store();
  	store.addChangeListener(this._onChange);
  	// console.log(store.addChangeListener)
  	// console.log(Store)
    // Store.addChangeListener(this._onChange);
  }

	render() {
		var connectedUser = this.state.connectedUser;
		return (
			<div>
				<Nav />
				<div>{connectedUser}</div>
				<div className="row">
					<div className="nine columns" id="chatColumn">
						<JoinChat />
						<ChatWindow user={connectedUser} />
					</div>
					<div className="three columns" id="userColumn">
						<UserList />
					</div>
				</div>
			</div>
		);
	}
}

export default APP;