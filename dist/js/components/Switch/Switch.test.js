"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Switch = _interopRequireDefault(require("./Switch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  onChange: jest.fn(),
  checked: false
};
test('switch label for attribute equals input id attribute', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "foo"
  }));
  expect(view.find('input').prop('id')).toBe('foo');
  expect(view.find('label').prop('htmlFor')).toBe('foo');
});
test('switch label id is auto generated', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    "aria-label": "..."
  }));
  expect(view.find('input').prop('id')).toBeDefined();
});
test('switch is checked', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "switch-is-checked",
    label: "On",
    isChecked: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch is not checked', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "switch-is-not-checked",
    label: "Off",
    isChecked: false
  }));
  expect(view).toMatchSnapshot();
});
test('no label switch is checked', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "no-label-switch-is-checked",
    isChecked: true
  }));
  expect(view).toMatchSnapshot();
});
test('no label switch is not checked', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "no-label-switch-is-not-checked",
    isChecked: false
  }));
  expect(view).toMatchSnapshot();
});
test('switch is checked and disabled', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "switch-is-checked-and-disabled",
    isChecked: true,
    isDisabled: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch is not checked and disabled', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], {
    id: "switch-is-not-checked-and-disabled",
    isChecked: false,
    isDisabled: true
  }));
  expect(view).toMatchSnapshot();
});
test('switch passes value and event to onChange handler', function () {
  var newValue = true;
  var event = {
    currentTarget: {
      checked: newValue
    }
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Switch["default"], _extends({
    id: "onChange-switch"
  }, props)));
  view.find('input').simulate('change', event);
  expect(props.onChange).toBeCalledWith(newValue, event);
});