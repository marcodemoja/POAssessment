import DS from 'ember-data';
//import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1/streams',
  host: 'http://www.watchpeoplecode.com',

  urlForQuery: function(query){
     var t=query.filter;
	console.log(t);
     return this.urlForFindAll()+'/'+t;

  },

  shouldReloadAll: function(){
    return true;
  }
});
