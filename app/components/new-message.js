import Ember from 'ember';

export default Ember.Component.extend({
  addNewMessage:false,

  actions:{
    messageFormShow(){
      this.set("addNewMessage", true);
    },

    saveMessage1(){
      var params = {
        author: this.get("author") ? this.get("author") : "",
        question: this.get("question") ? this.get("question") : "",
        notes: this.get("notes") ? this.get("notes") : "",
      };
      this.set("addNewMessage",false);
      this.sendAction("saveMessage2",params);
    }
  }
});
