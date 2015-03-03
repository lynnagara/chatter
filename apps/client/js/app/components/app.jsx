import Nav from './nav.jsx';
import JoinChat from './joinchat.jsx';
import ChatWindow from './chatwindow.jsx';
import UserList from './userlist.jsx';
import UserStore from '../stores/user-store';


class APP extends React.Component {

	// Method to retrieve application state from store
	getAppState () {
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
		console.log('changed')
    // this.setState(getAppState());
  }

  componentDidMount () {
  	UserStore.addChangeListener(this._onChange);
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