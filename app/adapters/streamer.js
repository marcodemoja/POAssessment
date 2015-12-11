import DS from 'ember-data';
//import Ember from 'ember';

export default DS.JSONAPIAdapter.extend({
  namespace: 'api/v1/streamers',
  host: 'http://www.watchpeoplecode.com',

  urlForQueryRecord: function(query){
    var u = query.user;
    var url = this.urlForFindAll() +'/'+ u;

    return url;
  }
});
