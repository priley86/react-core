"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _LoginPage = _interopRequireDefault(require("./LoginPage"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var needAccountMesseage = _react["default"].createElement(_react["default"].Fragment, null, "Login to your account ", _react["default"].createElement("a", {
  href: "https://www.patternfly.org"
}, "Need an account?"));

var props = {
  footerListVariants: 'inline',
  brandImgSrc: 'Brand src',
  brandImgAlt: 'Pf-logo',
  backgroundImgSrc: 'Background src',
  backgroundImgAlt: 'Pf-background',
  footerListItems: 'English',
  textContent: 'This is placeholder text only.',
  loginTitle: 'Log into your account',
  signUpForAccountMessage: needAccountMesseage,
  socialMediaLoginContent: 'Footer'
};
test('check loginpage example against snapshot', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginPage["default"], props));
  expect(view).toMatchSnapshot();
});