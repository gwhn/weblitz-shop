define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var ProductItemView = Backbone.View.extend({
		events: {
			'click': 'show'
		},

		tagName: 'li',

		template: _.template('<%= name %>'),

		route: _.template('products/<%= name %>'),

		initialize: function() {
			_.bindAll(this, 'render', 'show');
		},

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		},

		show: function() {
			Backbone.history.navigate(this.route(this.model.toJSON()), true);
		}
	});

	return ProductItemView;
});
