var AnswerModel = Backbone.Model.extend({
	
	questionID: false,
	
	urlRoot: function(){
		return Quest.url() + "/questions/" + this.questionID + "/answer"
	},
	
	constructor: function() {
		this.questionID =  window.QuestionView.model.get('id');
		Backbone.Model.apply(this, arguments);
	}
	
});