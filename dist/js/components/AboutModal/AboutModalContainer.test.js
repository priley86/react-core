"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _AboutModalContainer = _interopRequireDefault(require("./AboutModalContainer"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var props = {
  children: 'modal content',
  productName: 'Product Name',
  trademark: 'Trademark and copyright information here',
  brandImageSrc: 'brandImg...',
  brandImageAlt: 'Brand Image',
  logoImageSrc: 'logoImg...',
  logoImageAlt: 'AboutModal Logo',
  ariaLabelledbyId: 'ariaLablledbyId',
  ariaDescribedById: 'ariaDescribedById'
};
test('About Modal Container Test simple', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalContainer["default"], props, "This is ModalBox content"));
  expect(view).toMatchSnapshot();
});
test('About Modal Container Test isOpen', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalContainer["default"], _extends({
    title: "Test Modal Container title"
  }, props, {
    isOpen: true
  }), "This is ModalBox content"));
  expect(view).toMatchSnapshot();
});
test('About Modal Container Test with onlose', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_AboutModalContainer["default"], _extends({
    onclose: function onclose() {
      return undefined;
    }
  }, props), "This is ModalBox content"));
  expect(view).toMatchSnapshot();
});