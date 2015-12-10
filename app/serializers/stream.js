import DS from 'ember-data';

export default DS.JSONAPISerializer.extend({

  normalizeQueryResponse: function(store, type, payload) {
    var data = {};
    data.data = [];
    payload.data.forEach(function(item){
        data.data.push({
          id: item.id,
          type: type.modelName,
          attributes:{
            title: item.title,
            url: item.url,
            user: item.user
          }});
    });
    return data;
  }

});
