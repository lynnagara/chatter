import UserStore from '../stores/user-store';

class Conversation extends React.Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			messages: UserStore.getMessages()
		}
	}

	_onChange () {
    this.setState({messages: UserStore.getMessages()});
  }

  componentDidMount () {
  	UserStore.addChangeListener(this._onChange);
  }

	render() {
		var messages = this.state.messages;
		var messageList;
		if (!messages.length) {
			messageList = <div>Start the conversation...</div>
		} else {
			var listitems = messages.map(message => {
				return <li key={message.key}>{message.message} = {message.username}</li>;
			});
			messageList = <ul>{listitems}</ul>

		}

		return (
			<div>
				{messageList}
			</div>
		);
	}
}

export default Conversation;