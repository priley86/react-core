function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { shallow } from 'enzyme';
import DropdownToggleCheckbox from './DropdownToggleCheckbox';
var props = {
  onChange: jest.fn(),
  isChecked: false
};
test('controlled', function () {
  var view = shallow(React.createElement(DropdownToggleCheckbox, {
    isChecked: true,
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('uncontrolled', function () {
  var view = shallow(React.createElement(DropdownToggleCheckbox, {
    id: "check",
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
  var view = shallow(React.createElement(DropdownToggleCheckbox, {
    id: "check",
    isDisabled: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('passing class', function () {
  var view = shallow(React.createElement(DropdownToggleCheckbox, {
    label: "label",
    className: "class-123",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('passing HTML attribute', function () {
  var view = shallow(React.createElement(DropdownToggleCheckbox, {
    label: "label",
    "aria-labelledby": "labelId",
    id: "check",
    isChecked: true,
    "aria-label": "check"
  }));
  expect(view).toMatchSnapshot();
});
test('checkbox passes value and event to onChange handler', function () {
  var newValue = true;
  var event = {
    currentTarget: {
      checked: newValue
    }
  };
  var view = shallow(React.createElement(DropdownToggleCheckbox, _extends({
    id: "check"
  }, props, {
    "aria-label": "check"
  })));
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});