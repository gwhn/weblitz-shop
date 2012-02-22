define(['models/category'], function(CategoryModel) {
	var CategoriesCollection = Backbone.Collection.extend({
		url: '/categories',
		model: CategoryModel
	});

	return CategoriesCollection;
});