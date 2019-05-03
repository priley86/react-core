"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DropdownItem = _interopRequireDefault(require("./DropdownItem"));

var _Separator = _interopRequireDefault(require("./Separator"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('dropdown items', function () {
  test('a', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownItem["default"], null, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('button', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownItem["default"], {
      component: "button"
    }, "Something"));
    expect(view).toMatchSnapshot();
  });
  test('separator', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Separator["default"], null));
    expect(view).toMatchSnapshot();
  });
  describe('hover', function () {
    test('a', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownItem["default"], {
        isHovered: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownItem["default"], {
        isHovered: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
  describe('disabled', function () {
    test('a', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownItem["default"], {
        isDisabled: true
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = (0, _enzyme.shallow)(_react["default"].createElement(_DropdownItem["default"], {
        isDisabled: true,
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
  });
});