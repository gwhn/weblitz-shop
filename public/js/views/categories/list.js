define(['jquery', 'underscore', 'backbone', 'text!templates/categories/list.html'], function($, _, Backbone, CategoriesListTemplate) {
	var CategoriesListView = Backbone.View.extend({
		events: {},

		template: _.template(CategoriesListTemplate),

		initialize: function() {
			_.bindAll(this, 'render');
		},

		render: function() {
			$(this.el).html(this.template());
			return this;
		}
	});

	return CategoriesListView;
});