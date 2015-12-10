import DS from 'ember-data';

export default DS.JSONAPIAdapter.extend({
  namespace: '/api/v1/streams',
  host: 'http://www.watchpeoplecode.com',
  pathForType: function(type) {
    return Ember.String.singularize(type);
  },
  shouldReloadAll: function(){
    return true;
  }
});
