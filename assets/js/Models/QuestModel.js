var QuestModel = Backbone.Model.extend({

	urlRoot:    $.QueryString['srv'] + "/api/quests/",

	constructor: function() {
	this.Questions =  new QuestionsCollection;
	//this.Questions.url = function(){return Quest.url() + "/questions"};
	Backbone.Model.apply(this, arguments);
	}

});