import Nav from './nav.jsx';
import JoinChat from './joinchat.jsx';
import ChatWindow from './chatwindow.jsx';
import Conversation from './conversation.jsx';
import UserList from './userlist.jsx';
import UserStore from '../stores/user-store';


class APP extends React.Component {

	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			connectedUser: UserStore.getConnectedUser()
		}
	}

	_onChange () {
    this.setState({connectedUser: UserStore.getConnectedUser()});
  }

  componentDidMount () {
  	UserStore.addChangeListener(this._onChange);
  }

	render() {
		var connectedUser = this.state.connectedUser;
		return (
			<div>
				<Nav />
				<div className="row">
					<div className="nine columns" id="chatColumn">
						{ this.state.connectedUser ? 
								<div className="conversation-wrap">
									<div className="conversation"><Conversation /></div>
									<div className="add-message"><ChatWindow user={connectedUser} /></div>
								</div> : 
								<JoinChat />
						}
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