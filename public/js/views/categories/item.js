define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var CategoryItemView = Backbone.View.extend({
		events: {},

		tagName: 'li',

		template: _.template('<%= name %>'),

		initialize: function() {
			_.bindAll(this, 'render');
		},

		render: function() {
			$(this.el).html('this.template(this.model.toJSON())');
			return this;
		}
	});

	return CategoryItemView;
});
