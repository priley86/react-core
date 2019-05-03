"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _CheckboxSelectGroup = _interopRequireDefault(require("./CheckboxSelectGroup"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('checkbox select options', function () {
  test('renders with children successfully', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_CheckboxSelectGroup["default"], {
      label: "test"
    }, _react["default"].createElement("div", null, "child")));
    expect(view).toMatchSnapshot();
  });
});