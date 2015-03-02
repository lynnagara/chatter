class ChatWindow extends React.Component {
	constructor(props) {
		super(props);
	}

	submitForm() {
		event.preventDefault();
		console.log('check if the websocket is alive')
	}


	render() {
		return (
			<div>
				<div>connected user: {this.props.user}</div>
				<div>
					This is the chat window
				</div>
				<form onSubmit={this.submitForm}>
					<button>Send message</button>
				</form>
			</div>
		);
	}
}

export default ChatWindow;