import Ember from 'ember';

const { getOwner, assert } = Ember;

const UnionComponent = {
  from(...classList) {
    return unionComponentFrom(classList);
  }
};

function unionComponentFrom(classList) {
  return {
    create(props) {
      console.log('derp');
      const type = props.attrs.type;
      const owner = getOwner(props);
      const klass = owner.resolveRegistration(`component:${type}`);
      const klassIndex = classList.indexOf(klass);

      assert(`The type '${type}' is not a member of this union.`, klassIndex !== -1);

      return new classList[klassIndex](...arguments);
    },
    isComponentFactory: true,
    positionalParams: [ 'type' ],
  };
}

export default UnionComponent;
