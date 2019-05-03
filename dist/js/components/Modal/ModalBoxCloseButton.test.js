"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ModalBoxCloseButton = _interopRequireDefault(require("./ModalBoxCloseButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ModalBoxCloseButton Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBoxCloseButton["default"], null));
  expect(view).toMatchSnapshot();
});