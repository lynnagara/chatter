import APP from './app/components/app.jsx';

React.render(
	<APP />, 
	document.getElementById('app')
);



// import Router from './router';

// $(() => {
// 	// var properties = {
// 	// 	host: location.host
// 	// }		

// 	// new Router();
// 	// Backbone.history.start();
// 	var websocket = new WebSocket('ws://' + location.host, 'echo');
// 	console.log(websocket)

// });