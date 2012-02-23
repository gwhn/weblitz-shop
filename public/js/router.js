define(['jquery', 'underscore', 'backbone', 'views/mediator'], function($, _, Backbone, MediatorView) {
	var Router = Backbone.Router.extend({
		routes: {
			'products/category/:name': 'category',
			'products/:name': 'product',
			'*actions': 'index'
		},

		initialize: function() {
			this.mediator = new MediatorView({
				el: '#app'
			});
		},

		index: function(actions) {
			this.mediator.render();
			console.log('default action');
		},

		category: function(name) {
			this.mediator.showProductsByCategory(name);
		},

		product: function(name) {
			this.mediator.showProduct(name);
		}
	});

	var initialize = function() {
			var router = new Router();
			Backbone.history.start();
		};

	return {
		initialize: initialize
	};
});