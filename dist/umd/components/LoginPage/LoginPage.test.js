"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./LoginPage"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./LoginPage"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.LoginPage);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _LoginPage) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _LoginPage2 = _interopRequireDefault(_LoginPage);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var needAccountMesseage = _react2["default"].createElement(_react2["default"].Fragment, null, "Login to your account ", _react2["default"].createElement("a", {
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
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginPage2["default"], props));
    expect(view).toMatchSnapshot();
  });
});