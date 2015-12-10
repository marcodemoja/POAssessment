import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    home: function() {
      // the current value of the text field
      var models = this.get('model');
      console.log(models);
    }
  }
});
