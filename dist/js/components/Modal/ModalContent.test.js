"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Modal Content Test only body', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test isOpen', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with header', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true,
    header: "Testing"
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with footer', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true,
    actions: ['Testing']
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content test without footer', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with header and footer', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    header: "Testing header",
    id: "id",
    isOpen: true,
    actions: ['Testing footer']
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with onclose', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ModalContent["default"], {
    title: "Test Modal Content title",
    header: "Testing header",
    actions: ['Testing footer'],
    isLarge: true,
    onclose: function onclose() {
      return undefined;
    },
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});