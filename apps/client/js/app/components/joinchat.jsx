import Actions from '../actions/actions.js';

class JoinChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {username: ''}
	}

	submitForm() {
		event.preventDefault();
		var act = new Actions();
		act.connectUser(this.state.username);
	}

	handleChangeName() {
		this.setState({username:event.target.value});
	}

	render() {
		return (
			<form onSubmit={this.submitForm.bind(this)}>
				<div>
					<label>Join the chat</label>
				</div>
				<div>
					<input type="text" value={this.state.username} onChange={this.handleChangeName.bind(this)} placeholder="Enter your name" />
				</div>
				<button>Join Chat</button>
			</form>
		);
	}
}

export default JoinChat;