var AppView = Backbone.View.extend({
  el: "#container-main",

  tagName: "div",

  events: {
    //"click .questions-list":    "renderQuestionsList",
    //"click .questions-map":     "renderQuestionsMap"
  },

  initialize: function() {
    //this._modelBinder = new Backbone.ModelBinder();
    //this.listenTo(this.model, "change", this.render);
    //this.listenTo(this.model, "sync", this.afterSync);
  },

  afterSync: function() {
    //this.model.transformObProps(function(){CurObView.render();});
    //this.model.transformSubObsProp(function(){CurObView.render();});
  },

  close: function(){
      //this._modelBinder.unbind();
  },

  render: function() {
    this.$el.html(QuestTpl.render({quest: this.model.attributes }));

    window.ListView = new QuestListView({model: this.model});
    window.MapView = new QuestMapView({model: this.model});

    window.ListView.render();

    console.log('App Rendered');

    return this;
  },

  renderQuestionsList: function(){
    return window.ListView.render();
  },

  renderQuestionsMap: function(){
    return window.MapView.render();
  },

  renderQuestion: function(id){
    window.QuestionView = new QuestQuestionView({model: this.model.Questions.get(id)});
    return window.QuestionView.render();
  }
});