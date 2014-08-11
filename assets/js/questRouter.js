var AppRouter = Backbone.Router.extend({

  routes: {
    "list":                 "list",
    "map":                  "map",
    "question/:id":         "question",
    "question/:id/answer":  "questionAnswer"
  },

  list: function() {
    App.renderQuestionsList();
  },

  map: function() {
    App.renderQuestionsMap();
  },

  question: function(id) {
    App.renderQuestion(id);
  },

  questionAnswer: function(id) {
    App.renderAnswer(id);
  }

});