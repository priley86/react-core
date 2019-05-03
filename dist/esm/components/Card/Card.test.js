import React from 'react';
import Card from './Card';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(Card, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(Card, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card';
  var view = shallow(React.createElement(Card, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
  var component = 'section';
  var view = shallow(React.createElement(Card, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return null;
  };

  var view = shallow(React.createElement(Card, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
test('card with isHoverable applied ', function () {
  var view = shallow(React.createElement(Card, {
    isHoverable: true
  }));
  expect(view).toMatchSnapshot();
});