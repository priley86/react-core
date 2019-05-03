"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AboutModalBoxHero = _interopRequireDefault(require("./AboutModalBoxHero"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('test About Modal Box SHero', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBoxHero["default"], null));
  expect(view).toMatchSnapshot();
});