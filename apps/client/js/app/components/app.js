/** @jsx React.DOM */
React.render(
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
	</div>, 
	document.getElementById('app')
);