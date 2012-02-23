define(['models/Product'], function(ProductModel) {
	var ProductsCollection = Backbone.Collection.extend({
		url: '/products',

		model: ProductModel,

		byCategory: function(name) {
			return _(this.filter(function(product) {
				return _.any(product.get("categories"), function(category) {
					return category.name === name;
				})
			}));
		},

		byName: function(name) {
			return this.find(function(product) {
				return product.get("name") === name;
			});
		}
	});

	return ProductsCollection;
});