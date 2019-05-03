"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ModalBoxFooter = _interopRequireDefault(require("./ModalBoxFooter"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ModalBoxFooter Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBoxFooter["default"], null, "This is a ModalBox Footer"));
  expect(view).toMatchSnapshot();
});