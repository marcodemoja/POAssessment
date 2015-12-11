import Ember from 'ember';

export default Ember.Route.extend({
    model: function(params){
        return this.store.queryRecord('streamer',{user: params.user});
    },
    setupController:function(controller,model){
        controller.set('model',model);
    }

});
