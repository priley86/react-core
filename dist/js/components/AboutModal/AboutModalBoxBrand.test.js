"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AboutModalBoxBrand = _interopRequireDefault(require("./AboutModalBoxBrand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('test About Modal Brand', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBoxBrand["default"], {
    src: "testimage..",
    alt: "brand"
  }));
  expect(view).toMatchSnapshot();
});