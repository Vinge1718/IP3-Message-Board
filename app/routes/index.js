import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll("message");
  },

  saveMessage3(params){
    var newMessage = this.store.createRecord("message", params);
    newMessage.save();
    this.transitionTo("index");
  }

});
