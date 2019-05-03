"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Login", "./LoginFooter", "./LoginHeader"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Login"), require("./LoginFooter"), require("./LoginHeader"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Login, global.LoginFooter, global.LoginHeader);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Login, _LoginFooter, _LoginHeader) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Login2 = _interopRequireDefault(_Login);

  var _LoginFooter2 = _interopRequireDefault(_LoginFooter);

  var _LoginHeader2 = _interopRequireDefault(_LoginHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Check login layout example against snapshot', function () {
    var Header = _react2["default"].createElement(_LoginHeader2["default"], {
      headerBrand: "HeaderBrand"
    }, "Header Text");

    var Footer = _react2["default"].createElement(_LoginFooter2["default"], null, "Footer");

    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Login2["default"], {
      footer: Footer,
      header: Header
    }, "Main"));
    expect(view).toMatchSnapshot();
  });
});