require.config({
	paths: {
		loader: 'loader',
		jquery: 'jquery',
		underscore: 'underscore',
		backbone: 'backbone'
	}
});

require(['app'], function(app) {
	app.initialize();
});