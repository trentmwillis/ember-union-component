import Ember from 'ember';

export default Ember.Controller.extend({
  componentType: 'foo-component',
  init() {
    Ember.run.later(() => {
      this.set('componentType', 'bar-component');
      console.log('bar-component set as type');
    }, 500);
  }
});
