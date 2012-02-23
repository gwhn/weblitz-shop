define(['jquery', 'underscore', 'backbone', 'collections/categories', 'views/categories/list', 'collections/products', 'views/products/list'],

function($, _, Backbone, CategoriesCollection, CategoryListView, ProductsCollection, ProductListView) {
	var MediatorView = Backbone.View.extend({
		events: {},

		initialize: function() {
			_.bindAll(this, 'render', 'showCategories', 'showProducts', 'showProductsByCategory');

			this.categories = new CategoriesCollection();
			this.categories.on('reset', this.showCategories);

			this.products = new ProductsCollection();
			this.products.on('reset', this.showProducts);
		},

		render: function() {
			this.categories.fetch();
			this.products.fetch();
			return this;
		},

		showCategories: function(collection) {
			if (this.categoryList) {
				this.categoryList.remove();
				this.categoryList.unbind();
			};
			this.categoryList = new CategoryListView({
				collection: collection
			});
			$(this.el).append(this.categoryList.render().el);
		},

		showProducts: function(collection) {
			if (this.productList) {
				this.productList.remove();
				this.productList.unbind();
			};
			this.productList = new ProductListView({
				collection: collection
			});
			$(this.el).append(this.productList.render().el);
		},

		showProductsByCategory: function(name) {
			this.showProducts(this.products.byCategory(name));
		}
	});

	return MediatorView;
});