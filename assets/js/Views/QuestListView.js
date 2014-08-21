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

    this.$el.html(QuestionListTpl.render({questions: this.model.Questions.toJSON()}));
    
    console.log('List Rendered');

    return this;
  }
});