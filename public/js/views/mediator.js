define(['jquery', 'underscore', 'backbone', 'collections/categories', 'views/categories/list'], function($, _, Backbone, CategoriesCollection, CategoryListView) {
	var MediatorView = Backbone.View.extend({
		events: {},

		initialize: function() {
			_.bindAll(this, 'render');
			this.categories = new CategoriesCollection();
			this.categoryList = new CategoryListView({
				collection: this.categories
			});
		},

		render: function() {
			var self = this;
			this.categories.fetch({
				success: function(collection, response) {
					$(self.el).html(self.categoryList.render().el);
				}
			});
			return this;
		}
	});

	return MediatorView;
});