define(['jquery', 'underscore', 'backbone', 'collections/categories', 'views/categories/list', 'collections/products', 'views/products/list'],

function($, _, Backbone, CategoriesCollection, CategoryListView, ProductsCollection, ProductListView) {
	var MediatorView = Backbone.View.extend({
		events: {},

		initialize: function() {
			_.bindAll(this, 'render', 'showCategories', 'showProducts', 'showProductsByCategory');

			this.categories = new CategoriesCollection();
			this.categories.on('reset', this.showCategories);
			this.categories.fetch();
			this.categoryList = new CategoryListView();

			this.products = new ProductsCollection();
			this.products.on('reset', this.showProducts);
			this.products.fetch();
			this.productList = new ProductListView();
		},

		render: function() {
			return this;
		},

		showCategories: function(collection) {
			this.categoryList.collection = collection;
			$(this.el).append(this.categoryList.render().el);
		},

		showProducts: function(collection) {
			this.productList.collection = collection;
			$(this.el).append(this.productList.render().el);
		},

		showProductsByCategory: function(name) {
			this.productList.remove();
			this.productList.collection = this.products.byCategory(name);
			$(this.el).append(this.productList.render().el);
		}
	});

	return MediatorView;
});