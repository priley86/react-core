"use strict";

var _react = _interopRequireDefault(require("react"));

var _Radio = _interopRequireDefault(require("./Radio"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  onChange: jest.fn()
};
describe('Radio check component', function () {
  test('controlled', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      isChecked: true,
      id: "check",
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('uncontrolled', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      id: "check",
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('isDisabled', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      id: "check",
      isDisabled: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('label is string', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      label: "Label",
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('label is function', function () {
    var functionLabel = function functionLabel() {
      return _react["default"].createElement("h1", null, "Header");
    };

    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      label: functionLabel(),
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('label is node', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      label: _react["default"].createElement("h1", null, "Header"),
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('passing class', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      label: "label",
      className: "class-123",
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('passing HTML attribute', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], {
      label: "label",
      "aria-labelledby": "labelId",
      id: "check",
      isChecked: true,
      "aria-label": "check",
      name: "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Radio passes value and event to onChange handler', function () {
    var newValue = true;
    var event = {
      currentTarget: {
        checked: newValue
      }
    };
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Radio["default"], _extends({
      id: "check"
    }, props, {
      "aria-label": "check",
      name: "check"
    })));
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
});