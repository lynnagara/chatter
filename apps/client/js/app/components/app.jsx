import Nav from './nav.jsx';
import JoinChat from './joinchat.jsx';
import ChatWindow from './chatwindow.jsx';
import UserList from './userlist.jsx';
// import Store from '../stores/store';

class APP extends React.Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<Nav />
				<div className="row">
					<div className="nine columns" id="chatColumn">
						<JoinChat />
						<ChatWindow />
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