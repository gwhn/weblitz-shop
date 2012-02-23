define(['jquery', 'underscore', 'backbone'], function($, _, Backbone) {
	var ProductDetailView = Backbone.View.extend({
		events: {},

		template: _.template(' \
			<div class="details"> \
				<div class="name"><%= name %></div> \
				<div class="description"><%= description %></div> \
				<div class="price"><%= price %></div> \
			</div> \
		'),

		initialize: function() {
			_.bindAll(this, 'render');
		},

		render: function() {
			$(this.el).html(this.template(this.model.toJSON()));
			return this;
		}
	});

	return ProductDetailView;
});