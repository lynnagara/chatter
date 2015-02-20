import HomeView from './app/views/home';

class Router extends Backbone.Router {
	constructor() {
		this.routes = {
			'': 'home',
			'test': 'test'
		};
		super();
	}

	home () {
		// var view = new HomeView();
		// $('#app').html(view.render().$el);

		// $.get('/templates/home.html', function (data) {
		// 	template = _.template(data, {  });
		// 	this.$el.html(template);  
		// }, 'html');



	}

	test () {
		console.log('test');
	}
}

export default Router;