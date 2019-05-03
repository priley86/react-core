"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Form = _interopRequireDefault(require("./Form"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Form component', function () {
  test('should render default form variant', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Form["default"], null));
    expect(view).toMatchSnapshot();
  });
  test('should render horizontal form variant', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Form["default"], {
      isHorizontal: true
    }));
    expect(view).toMatchSnapshot();
  });
});