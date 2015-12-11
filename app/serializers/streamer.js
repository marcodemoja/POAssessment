import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeQueryRecordResponse: function(store, type, payload) {
    console.log(payload.data);
    var data = {data:{
      id: 1,
      type: type.modelName,
      attributes: {
        name: payload.data.name,
        twitch: payload.data.twitch,
        youtube: payload.data.youtube
      }
    }};
    return data;
  }

});
