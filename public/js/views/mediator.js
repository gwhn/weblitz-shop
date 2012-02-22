define(['jquery', 'underscore', 'backbone', 'collections/categories', 'views/categories/list', 'collections/products', 'views/products/list'],

function($, _, Backbone, CategoriesCollection, CategoryListView, ProductsCollection, ProductListView) {
	var MediatorView = Backbone.View.extend({
		events: {},

		initialize: function() {
			_.bindAll(this, 'render', 'showCategories', 'showProducts');
		},

		render: function() {
			this.categories = new CategoriesCollection();
			this.categories.on('reset', this.showCategories);
			this.categories.fetch();
			this.products = new ProductsCollection();
			this.products.on('reset', this.showProducts);
			this.products.fetch();
			return this;
		},

		showCategories: function(collection) {
			this.categoryList = new CategoryListView({
				collection: collection
			});
			$(this.el).append(this.categoryList.render().el);
		},

		showProducts: function(collection) {
			this.productList = new ProductListView({
				collection: collection
			});
			$(this.el).append(this.productList.render().el);
		}
	});

	return MediatorView;
});