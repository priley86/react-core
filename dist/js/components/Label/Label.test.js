"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Label = _interopRequireDefault(require("./Label"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('label', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label["default"], null, "Something"));
  expect(view).toMatchSnapshot();
});
test('compact label', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label["default"], {
    isCompact: true
  }, "Something"));
  expect(view).toMatchSnapshot();
});
test('label with additional class name', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label["default"], {
    className: "klass1"
  }, "Something"));
  expect(view).toMatchSnapshot();
});
test('label with additional class name and props', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Label["default"], {
    className: "class-1",
    id: "label-1",
    "data-label-name": "something"
  }, "Something"));
  expect(view).toMatchSnapshot();
});