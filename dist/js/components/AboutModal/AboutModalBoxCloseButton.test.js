"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AboutModalBoxCloseButton = _interopRequireDefault(require("./AboutModalBoxCloseButton"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('AboutModalBoxCloseButton Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBoxCloseButton["default"], null));
  expect(view).toMatchSnapshot();
});
test('AboutModalBoxCloseButton Test onclose', function () {
  var onClose = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalBoxCloseButton["default"], {
    onclose: onClose
  }));
  expect(view).toMatchSnapshot();
});