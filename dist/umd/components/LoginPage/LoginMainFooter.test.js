"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./LoginMainFooter", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./LoginMainFooter"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.LoginMainFooter, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _LoginMainFooter, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _LoginMainFooter2 = _interopRequireDefault(_LoginMainFooter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooter2["default"], null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooter2["default"], {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', function () {
    var testId = 'login-body';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooter2["default"], {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
});