define(['models/category'], function(CategoryModel) {
	var CategoriesCollection = Backbone.Collection.extend({
		model: CategoryModel
	});

	return CategoriesCollection;
});