"use strict";

var _react = _interopRequireDefault(require("react"));

var _LoginMainHeader = _interopRequireDefault(require("./LoginMainHeader"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginMainHeader["default"], null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginMainHeader["default"], {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-header';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginMainHeader["default"], {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('title and subtitle are rendered correctly', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginMainHeader["default"], {
    title: "Log in to your account",
    subtitle: "Use LDAP credentials"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});