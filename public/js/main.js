require.config({
	paths: {
		jquery: 'lib/jquery-1.7.1',
		underscore: 'lib/underscore',
		backbone: 'lib/backbone',
		templates: './templates'
	}
});

require(['app'], function(App) {
	App.initialize();
});