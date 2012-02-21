define(['models/Product'], function(ProductModel) {
	var ProductsCollection = Backbone.Collection.extend({
		model: ProductModel
	});

	return ProductsCollection;
});