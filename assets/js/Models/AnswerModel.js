var AnswerModel = Backbone.Model.extend({
	
	questionID: false,
	
	urlRoot: function(){
		return Quest.url() + "/questions/" + this.get('questionID') + "/answer"
	}

});