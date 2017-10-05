import Ember from 'ember';

export default Ember.Component.extend({
  updateMessageForm:false,
  actions:{
    delete(message){
      if(confirm("Are you sure you want to delete this question?")){
        this.sendAction("destroyMessage", message);
      }
    },

    update(message, params){
      this.sendAction("update", message, params);
    }
  }
});
