import Ember from 'ember';

export default Ember.Component.extend({
  actions:{
    delete(answer){
      if(cconfirm("Are you sure you wantt to delete this Response?")){
        this.sendAction("destroyAnswer",answer);
      }
    }
  }
});
