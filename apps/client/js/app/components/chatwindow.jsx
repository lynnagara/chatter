import Actions from '../actions/actions.js';
import UserStore from '../stores/user-store';

class ChatWindow extends React.Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			message: ''
		}
	}

	_onChange () {
    // this.setState({message: ''});
  }

  componentDidMount () {
  	// UserStore.addChangeListener(this._onChange);
  }

	submitForm() {
		event.preventDefault();
		if (this.state.message && this.state.message.length) {
			var act = new Actions();
			act.postMessage({
				connectedUser: this.props.user,
				message: this.state.message
			});
		}
	}

	handleUpdateMessage() {
		this.setState({message:event.target.value});
	}

	render() {
		return (
			<div>
				<div>Connected as <strong>{this.props.user.username}</strong></div>
				<form onSubmit={this.submitForm.bind(this)}>
					<div>
						<textarea value={this.state.message} onChange={this.handleUpdateMessage.bind(this)} placeholder="Add a message..."></textarea>
						<button>Send message</button>
					</div>
				</form>
			</div>
		);
	}
}

export default ChatWindow;