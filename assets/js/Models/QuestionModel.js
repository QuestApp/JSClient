var QuestionModel = Backbone.Model.extend({
  urlRoot: function(){return Quest.url() + "/questions/"},

  constructor: function() {
    this.Answer = new AnswerModel();
  	Backbone.Model.apply(this, arguments);
  	this.Answer.set('questionID', this.get('id'));
  	this.Answer.set('question', this.toJSON());
  	this.Answer.set('quest', window.Quest.toJSON());
  }

});