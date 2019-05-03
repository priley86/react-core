"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Tab = _interopRequireDefault(require("./Tab"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('should render tab', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1"
  }, "Tab 1 section"));
  expect(view).toMatchSnapshot();
});
test('should render active tab', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Tab["default"], {
    id: "tab1",
    eventKey: 0,
    title: "Tab item 1",
    isActive: true
  }, "Tab 1 section"));
  expect(view).toMatchSnapshot();
});