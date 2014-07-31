var QuestQuestionView = Backbone.View.extend({
  el: "#view",

  tagName: "div",

  events: {
    //"click .btn.edit":   "openQuestionView"
  },

  initialize: function() {
    //this.listenTo(this.model.Questions, "change", window.ActiveView.render);
  },

  render: function() {
    this.$el.html(QuestionTpl.render({question: this.model.attributes}));

    console.log('Question Rendered');

    initialize();
    addQuestion(this.model.toJSON());
    centerQuestion(this.model.toJSON());

    return html;
  }
});