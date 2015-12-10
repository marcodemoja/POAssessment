import Ember from 'ember';

export default Ember.Route.extend({

  setupController(controller, model) {
    this.store.findAll('upcoming').then(function(upcomings) {
      controller.set('upcomings', upcomings);
    });
    this.store.findAll('live').then(function(lives) {
      controller.set('lives', lives);
    });
  }
});
