define(['underscore', 'backbone'], function(_, Backbone) {
	var Router = Backbone.Router.extend({
		routes: {
			'*actions': 'do'
		},
		do: function(actions) {
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