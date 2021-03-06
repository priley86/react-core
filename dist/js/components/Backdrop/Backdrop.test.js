"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Backdrop = _interopRequireDefault(require("./Backdrop"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Backdrop Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Backdrop["default"], null, "Backdrop"));
  expect(view).toMatchSnapshot();
});