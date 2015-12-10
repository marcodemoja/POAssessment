import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return new Ember.RSVP.hash({
      upcoming: this.store.query('stream',{filter: 'upcoming'}),
      live: this.store.query('stream',{filter: 'live'})
    });
  }
});
