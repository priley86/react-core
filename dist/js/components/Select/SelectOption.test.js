"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _SelectOption = _interopRequireDefault(require("./SelectOption"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('select options', function () {
  test('renders with value parameter successfully', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectOption["default"], {
      value: "test",
      sendRef: jest.fn()
    }));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('renders with hover successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectOption["default"], {
        isHovered: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('renders disabled successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectOption["default"], {
        isDisabled: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
  describe('is selected', function () {
    test('renders selected successfully', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_SelectOption["default"], {
        isSelected: true,
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
  });
});