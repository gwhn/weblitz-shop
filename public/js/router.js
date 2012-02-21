define(['jquery', 'underscore', 'backbone', 'views/mediator'], function($, _, Backbone, MediatorView) {
	var Router = Backbone.Router.extend({
		routes: {
			'*actions': 'do'
		},

		initialize: function() {
			this.mediator = new MediatorView({
				el: '#app'
			});
		},

		do: function(actions) {
			this.mediator.render();
			console.log('default action');
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