require.config({
	paths: {
		jquery: 'libs/jquery-1.7.1.min',
		underscore: 'libs/underscore-min',
		backbone: 'libs/backbone-min'
	}
});

require(['app'], function(app) {
	app.init();
});