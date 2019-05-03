"use strict";

var _ModalBoxHeader = _interopRequireDefault(require("./ModalBoxHeader"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ModalBoxHeader Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBoxHeader["default"], null, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});