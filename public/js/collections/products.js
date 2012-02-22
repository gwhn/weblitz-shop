define(['models/Product'], function(ProductModel) {
	var ProductsCollection = Backbone.Collection.extend({
		url: '/products',
		model: ProductModel
	});

	return ProductsCollection;
});