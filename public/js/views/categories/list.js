define(['jquery', 'underscore', 'backbone', 'views/categories/item'], function($, _, Backbone, CategoryItemView) {
	var CategoriesListView = Backbone.View.extend({
		events: {},

		tagName: 'ul',

		initialize: function() {
			_.bindAll(this, 'render', 'all', 'add');
		},

		render: function() {
			this.all();
			return this;
		},

		all: function() {
			this.collection.each(this.add);
		},

		add: function(model) {
			var view = new CategoryItemView({
				model: model
			});
			$(this.el).append(view.render().el);
		}
	});

	return CategoriesListView;
});