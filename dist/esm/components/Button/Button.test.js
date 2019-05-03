import Button, { ButtonVariant } from './Button';
import React from 'react';
import { shallow } from 'enzyme';
Object.values(ButtonVariant).forEach(function (variant) {
  test("".concat(variant, " button"), function () {
    var view = shallow(React.createElement(Button, {
      variant: variant,
      "aria-label": variant
    }, variant, " Button"));
    expect(view).toMatchSnapshot();
  });
});
test('it adds an aria-label to plain buttons', function () {
  var label = 'aria-label test';
  var view = shallow(React.createElement(Button, {
    variant: ButtonVariant.action,
    "aria-label": label
  }));
  expect(view.find('button').props()['aria-label']).toBe(label);
});
test('isBlock', function () {
  var view = shallow(React.createElement(Button, {
    isBlock: true
  }, "Block Button"));
  expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
  var view = shallow(React.createElement(Button, {
    isDisabled: true
  }, "Disabled Button"));
  expect(view).toMatchSnapshot();
});
test('isFocus', function () {
  var view = shallow(React.createElement(Button, {
    isFocus: true
  }, "Focused Button"));
  expect(view).toMatchSnapshot();
});
test('isHover', function () {
  var view = shallow(React.createElement(Button, {
    isHover: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('isInline', function () {
  var view = shallow(React.createElement(Button, {
    variant: ButtonVariant.link,
    isInline: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('allows passing in a string as the component', function () {
  var component = 'a';
  var view = shallow(React.createElement(Button, {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return null;
  };

  var view = shallow(React.createElement(Button, {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', function () {
  var view = shallow(React.createElement(Button, {
    component: "a",
    isDisabled: true
  }, "Disabled Anchor Button"));
  expect(view).toMatchSnapshot();
});