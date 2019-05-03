"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Login = _interopRequireDefault(require("./Login"));

var _LoginFooter = _interopRequireDefault(require("./LoginFooter"));

var _LoginHeader = _interopRequireDefault(require("./LoginHeader"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Check login layout example against snapshot', function () {
  var Header = _react["default"].createElement(_LoginHeader["default"], {
    headerBrand: "HeaderBrand"
  }, "Header Text");

  var Footer = _react["default"].createElement(_LoginFooter["default"], null, "Footer");

  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Login["default"], {
    footer: Footer,
    header: Header
  }, "Main"));
  expect(view).toMatchSnapshot();
});