// questApp.js
// contains all code related to our Backbone.js  Models, Collections and Views.

// Our Templates
var QuestTpl 			= twig({id: "app", base: "assets/twig/", href: "assets/twig/app.twig", async: false});
var QuestionListTpl 	= twig({id: "questionList", base: "assets/twig/", href: "assets/twig/list.twig", async: false});
var QuestionMapTpl  	= twig({id: "questionMap", base: "assets/twig/", href: "assets/twig/map.twig", async: false});
var QuestionTpl  		= twig({id: "question", base: "assets/twig/", href: "assets/twig/question.twig", async: false});
var AnswerTpl	  		= twig({id: "answer", base: "assets/twig/", href: "assets/twig/answer.twig", async: false});