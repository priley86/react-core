"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('popover renders close-button, header and body', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_index.Popover, {
    position: "top",
    isVisible: true,
    hideOnOutsideClick: true,
    headerContent: _react["default"].createElement("div", null, "Popover Header"),
    bodyContent: _react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, _react["default"].createElement("div", null, "Toggle Popover")));
  expect(view).toMatchSnapshot();
});