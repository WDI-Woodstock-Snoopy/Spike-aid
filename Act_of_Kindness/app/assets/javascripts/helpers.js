// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.
var LogoView = Backbone.View.extend({
    className: "column",
    id: "WDI-first",
    template: _.template("<h1><%= brand %></h1>"),
    initialize: function() {
      this.render();
    },
    render: function() {
      var data = {brand:"Logo Goes Here"};
      var renderedTemplate = this.template(data);
      this.$el.html(renderedTemplate);
      $('body').append(this.$el);
    }
  }
);

var logo = new LogoView();
