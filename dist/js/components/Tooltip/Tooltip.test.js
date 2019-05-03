"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _index = require("./index");

var _react2 = _interopRequireDefault(require("@tippy.js/react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('tooltip renders', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_index.Tooltip, {
    position: "top",
    content: _react["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
  }, _react["default"].createElement("div", null, "Toggle tooltip")));
  expect(view).toMatchSnapshot();
});
test('tooltip triggered by click', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_index.Tooltip, {
    position: "top",
    trigger: "click",
    content: _react["default"].createElement("p", null, "my content")
  }, _react["default"].createElement("div", null, "Toggle tooltip")));
  expect(view.find(_react2["default"]).prop('trigger')).toBe('click');
});