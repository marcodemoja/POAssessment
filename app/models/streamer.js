import DS from 'ember-data';

export default DS.Model.extend({
    name: DS.attr('string'),
    twitch: DS.attr('string'),
    youtube: DS.attr('string')
});


