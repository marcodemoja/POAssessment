import DS from 'ember-data';

export default DS.JSONAdapter.extend({
  namespace: 'api/v1/streamers',
  host: 'https://watchpeoplecode.com'
});
