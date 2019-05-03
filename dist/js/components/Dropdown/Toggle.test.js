"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

var _KebabToggle = _interopRequireDefault(require("./KebabToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Dropdown toggle', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
    id: "Dropdown Toggle"
  }, "Dropdown"));
  expect(view).toMatchSnapshot();
});
test('Kebab toggle', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_KebabToggle["default"], {
    id: "Dropdown Toggle"
  }));
  expect(view).toMatchSnapshot();
});