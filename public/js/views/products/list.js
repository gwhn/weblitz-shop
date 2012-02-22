define(['jquery', 'underscore', 'backbone', 'views/products/item'], function($, _, Backbone, ProductItemView) {
	var ProductListView = Backbone.View.extend({
		events: {},

		tagName: 'ul',

		initialize: function() {
			_.bindAll(this, 'render', 'all', 'add');
		},

		render: function() {
			this.all();
			return this;
		},

		all: function() {
			this.collection.each(this.add);
		},

		add: function(model) {
			var view = new ProductItemView({
				model: model
			});
			$(this.el).append(view.render().el);
		}
	});

	return ProductListView;
});