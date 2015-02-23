import Router from './router';

$(() => {
	var properties = {
		host: location.host
	}		

	new Router();
	Backbone.history.start();
	// var exampleSocket = new WebSocket('ws://' + location.host, 'echo');
	// console.log(exampleSocket)


});