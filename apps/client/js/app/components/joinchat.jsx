class JoinChat extends React.Component {
	constructor(props) {
		super(props);
		this.state = {username: 'lyn'}
	}

	submitForm() {
		event.preventDefault();
		// Move this to Actions/Dispatcher
		websocket.send("Here's some text that the server is urgently awaiting!");


	}

	handleChangeName() {
		this.setState({username:event.target.value});
	}

	render() {
		return (
			<form onSubmit={this.submitForm}>
				<div>
					<label>Join the chat</label>
				</div>
				<div>
					<input type="text" value={this.state.username} onChange={this.handleChangeName.bind(this)} placeholder="Enter your name" />
				</div>
				<button>Sign in</button>
			</form>

		);
	}
}

export default JoinChat;