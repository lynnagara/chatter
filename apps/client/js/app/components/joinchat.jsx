import Actions from '../actions/actions.js';
import UserStore from '../stores/user-store';

class JoinChat extends React.Component {
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

	submitForm() {
		event.preventDefault();
		if (this.state.username) {
			var act = new Actions();
			act.connectUser(this.state.username);			
		}
	}

	handleChangeName() {
		this.setState({username:event.target.value});
	}

	render() {
		var connectedUser = this.state.connectedUser;
		return (
			<form onSubmit={this.submitForm.bind(this)}>
				<div>
					<label>Join the chat</label>
				</div>
				<div>connected user {connectedUser}</div>
				<div>
					<input type="text" value={this.state.username} onChange={this.handleChangeName.bind(this)} placeholder="Enter your name" />
				</div>
				<button>Join Chat</button>
			</form>
		);
	}
}

export default JoinChat;