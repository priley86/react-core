"use strict";

var _ModalBox = _interopRequireDefault(require("./ModalBox"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ModalBox Test', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBox["default"], {
    titleId: "titleId",
    ariaDescribedById: "bodyId"
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
test('ModalBox Test isLarge', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBox["default"], {
    titleId: "titleId",
    ariaDescribedById: "bodyId",
    isLarge: true
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
test('ModalBox Test isOpen', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalBox["default"], {
    titleId: "titleId",
    ariaDescribedById: "bodyId",
    isLarge: true,
    isOpen: true
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});