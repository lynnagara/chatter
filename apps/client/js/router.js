import APP from './app/components/app.jsx';

class Router extends Backbone.Router {
	constructor () {
		this.routes = {
			'': 'home',
			'test': 'test'
		};
		super();
	}

	home () {
		React.render(
			<APP />, 
			document.getElementById('app')
		);
	}

	test () {
		console.log('test');
	}
}

export default Router;