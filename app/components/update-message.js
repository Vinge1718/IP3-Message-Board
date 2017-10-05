import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm:false,

  actions:{
    showMessageUpdateForm(){
      this.set("updateMessageForm",true);
    },
    update(message){
      var params = {
        author: this.get("author"),
        question: this.get("question"),
        notes: this.get("notes"),
      };
      this.set("updateMessageForm",false);
      this.sendAction("update", message, params);
    }
  }
});
