/** @jsx React.DOM */
class JoinChat extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<form>
				<div>
					<label>Join the chat</label>
				</div>
				<div>
					<input type="text" placeholder="Enter your name" />
				</div>
				<button>Sign in</button>
			</form>

		);
	}
}