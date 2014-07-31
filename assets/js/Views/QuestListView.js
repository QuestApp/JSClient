var QuestListView = Backbone.View.extend({
  el: "#view",

  tagName: "div",

  events: {
    //"click .btn.edit":   "openQuestionView"
  },

  initialize: function() {
    //this.listenTo(this.model.Questions, "change", window.ActiveView.render);
  },

  render: function() {
    var html = "<table>";
    _(this.model.Questions.toArray()).forEach(function(val, key){
      html = html + "<tr><td><small>" + val.get('location_human') + "</small></td></tr>";
      html = html + "<tr><td><strong><a href='#question/"+ val.get('id') +"'>" + val.get('summary') + "</a></strong></td></tr>";
    })
    html = html + "</table>";
    this.$el.html(html);  
    
    console.log('List Rendered');

    return html;
  }
});