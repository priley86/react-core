import React from 'react';
import CardBody from './CardBody';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(CardBody, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(CardBody, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card-body';
  var view = shallow(React.createElement(CardBody, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
  var component = 'section';
  var view = shallow(React.createElement(CardBody, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return null;
  };

  var view = shallow(React.createElement(CardBody, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
test('body with no-fill applied ', function () {
  var view = shallow(React.createElement(CardBody, {
    isFilled: false
  }));
  expect(view).toMatchSnapshot();
});