define(['underscore', 'backbone'], function(_, bb) {
	var Router = bb.Router.extend({
		initialize: function() {
			bb.history.start();
		},
		routes: {}
	});
	return Router;
});