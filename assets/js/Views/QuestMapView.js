var QuestMapView = Backbone.View.extend({
  el: "#view",

  tagName: "div",

  events: {
    //"click .btn.edit":   "openQuestionView"
  },

  initialize: function() {
    //this.listenTo(this.model.Questions, "change", window.ActiveView.render);
  },

  render: function() {
    //var html = "<h1>MAP</h1>\n<table>";
    //_(this.model.Questions.toArray()).forEach(function(val, key){
    //  html = html + "<tr><td rowspan='2' style='text-align: center; width: 20%;'><h3>" + val.get('id') + "</h3></td><td>" + val.get('location_human') + "</td></tr>";
    //  html = html + "<tr><td><strong>" + val.get('summary') + "</strong></td></tr>";
    //})
    //html = html + "</table>";
    //this.$el.html(html);

    this.$el.html(QuestionMapTpl.render());

    initialize();
    updateGeoPosition(true,false);

    _(this.model.Questions.toArray()).forEach(function(val, key){
      addQuestion(val.toJSON());
    })

    console.log('Map Rendered');

    return this;
  }
});