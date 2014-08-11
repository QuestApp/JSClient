var QuestionsCollection = Backbone.Collection.extend({
  
	model: QuestionModel,

	url: function(){return Quest.url() + "/questions"}

});