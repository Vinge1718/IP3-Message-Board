import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("message");
  },

  actions:{
    update(message, params){
      Object.keys(params).forEach(function(key){
        if(params[key]!==undefined){
          message.set(key,params[key]);
        }
      });
      message.save();
      this.transitionTo("index");
    },

    destroyMessage(message){
      message.destroyRecord();
      this.transitionTo("index");
    },
    saveMessage3(params){
      var newMessage = this.store.createRecord("message", params);
      newMessage.save();
      this.transitionTo("index");
    }
  }
});
