var QuestionModel = Backbone.Model.extend({
  urlRoot: function(){return Quest.url() + "/questions/"}
});