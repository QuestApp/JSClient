var QuestAnswerView = Backbone.View.extend({
  el: "#view",

  tagName: "div",

  events: {
    "click .btn.submit-answer":   "save"
  },

  initialize: function() {
    //this.listenTo(this.model, "change", this.render);
    this._modelBinder = new Backbone.ModelBinder();
  },

  render: function() {
    this.$el.html(AnswerTpl.render({answer: this.model.attributes, formAction: this.model.url()}));
    this._modelBinder.bind(this.model, this.el);
    console.log('Answer Rendered');
    return this;
  },

  save: function(){
	  return $('form#answerForm').submit();
  }
});