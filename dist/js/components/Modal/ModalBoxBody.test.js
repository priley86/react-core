"use strict";

var _ModalBoxBody = _interopRequireDefault(require("./ModalBoxBody"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ModalBoxBody Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBoxBody["default"], {
    id: "id"
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});