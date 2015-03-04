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
		return (
			<div>
				This is the list of users -> {users}
			</div>
		);
	}
}

export default UserList;