"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ActionGroup = _interopRequireDefault(require("./ActionGroup"));

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('ActionGroup component', function () {
  test('should render default action group variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_ActionGroup["default"], null, _react["default"].createElement("div", null, "Hello")));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form ActionGroup variant', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Form["default"], {
      isHorizontal: true
    }, _react["default"].createElement(_ActionGroup["default"], null)));
    expect(view).toMatchSnapshot();
  });
});