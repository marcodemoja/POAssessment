import DS from 'ember-data';
import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1/streams',
  host: 'http://www.watchpeoplecode.com',
  pathForType: function(type) {
    return Ember.String.singularize(type);
  },

  urlForQuery: function(query){
     var m = query.filter;
     var url = this.urlForFindAll() +'/'+ m;

     return url;
  },

  shouldReloadAll: function(){
    return true;
  }
});
