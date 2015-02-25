import Router from './router';
import Store from './app/stores/store.js';

$(() => {
	new Router();
	Backbone.history.start();
	new Store();
});