require.config({
	paths: {
		jquery: 'lib/jquery-1.7.1.min',
		underscore: 'lib/underscore-min',
		backbone: 'lib/backbone-min',
		templates: './templates'
	}
});

require(['app'], function(App) {
	App.initialize();
});