import UnionComponent from 'ember-union-component/classes/union-component';
import FooComponent from './foo-component';
import BarComponent from './bar-component';

export default UnionComponent.from(FooComponent, BarComponent);
