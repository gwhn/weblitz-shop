define(['backbone'], function(bb) {
	var Router = bb.Router.extend({
		routes: {
			'*actions': 'do'
		},
		do: function(actions) {
			console.log('default action');
		}
	});

	var init = function() {
			var router = new Router();
			bb.history.start();
		};

	return {
		init: init
	};
});