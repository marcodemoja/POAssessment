import DS from 'ember-data';

export default DS.Model.extend({
    title: DS.attr(),
    url: DS.attr(),
    user: DS.attr(),
    scheduled_start_time: DS.attr()

});
