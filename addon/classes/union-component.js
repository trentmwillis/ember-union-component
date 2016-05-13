import Ember from 'ember';

const { getOwner, assert } = Ember;

const UnionComponent = {
  from(...classList) {
    return unionComponentFrom(classList);
  }
};

function unionComponentFrom(classList) {
  classList.forEach((klass) => {
    assert('Only Component classes can be used in a UnionComponent', klass.isComponentFactory);
  });

  return {
    create(props) {
      const type = props.attrs.type;
      const owner = getOwner(props);
      const klass = owner.resolveRegistration(`component:${type}`);
      const klassIndex = classList.indexOf(klass);

      assert(`The type '${type}' is not a member of this union.`, klassIndex !== -1);
      
      const instance = classList[klassIndex].create(...arguments);
      
      instance._isUnionComponent = true;

      return instance;
    },
    isComponentFactory: true,
    positionalParams: [ 'type' ],
  };
}

export default UnionComponent;
