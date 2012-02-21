define(['jquery', 'underscore', 'backbone', 'collections/categories', 'views/categories/list'], function($, _, Backbone, CategoriesCollection, CategoryListView) {
	var MediatorView = Backbone.View.extend({
		events: {},

		initialize: function() {
			_.bindAll(this, 'render');
			this.categories = new CategoriesCollection({
				url: '/categories'
			});
			this.categoryList = new CategoryListView({
				el: '#categories',
				collection: this.categories
			});
		},

		render: function() {
			$(this.el).html(this.categoryList.render().el);
			return this;
		}
	});

	return MediatorView;
});