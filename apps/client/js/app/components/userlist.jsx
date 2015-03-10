import UserStore from '../stores/user-store';

class UserList extends React.Component {
	constructor(props) {
		super(props);
		this._onChange = this._onChange.bind(this);
		this.state = {
			users: UserStore.getUserlist()
		}
	}

	_onChange () {
    this.setState({users: UserStore.getUserlist()});
  }

  componentDidMount () {
  	UserStore.addChangeListener(this._onChange);
  }

	render() {
		var users = this.state.users;
		var userList;

		if (!users.length) {
			userList = <div>No users online right now</div>
		} else {
			var listitems = users.map(user => {
				return <li key={user}>{user}</li>;
			});
			userList = <ul>{listitems}</ul>

		}

		return (
			<div>
				<div>People online now</div>
				{userList}
			</div>
		);
	}
}

export default UserList;