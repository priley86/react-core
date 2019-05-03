"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _LoginForm = _interopRequireDefault(require("./LoginForm"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('should render Login form', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], null));
  expect(view).toMatchSnapshot();
});
test('default function onChangeUsername', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-username-id').simulate('change');

  var result = _LoginForm["default"].defaultProps.onChangeUsername();

  expect(result).toBe(undefined);
});
test('should call onChangeUsername callback', function () {
  var mockFn = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    onChangeUsername: mockFn,
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-username-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('default function onChangePassword', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-password-id').simulate('change');

  var result = _LoginForm["default"].defaultProps.onChangePassword();

  expect(result).toBe(undefined);
});
test('should call onChangePassword callback', function () {
  var mockFn = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    onChangePassword: mockFn,
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-password-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('default function onChangeRememberMe', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-remember-me-id').simulate('change');

  var result = _LoginForm["default"].defaultProps.onChangeRememberMe();

  expect(result).toBe(undefined);
});
test('should call onChangeRememberMe callback', function () {
  var mockFn = jest.fn();
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    onChangeRememberMe: mockFn,
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-remember-me-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('LoginForm with rememberMeLabel and no rememberMeAriaLabel generates console error', function () {
  var myMock = jest.fn();
  var mockFn = jest.fn();
  global.console = {
    error: myMock
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    onChangeRememberMe: mockFn,
    rememberMeLabel: "remember me"
  }));
  expect(view).toMatchSnapshot();
  expect(myMock).toBeCalled();
});
test('LoginForm with rememberMeLabel and rememberMeAriaLabel does not generates console error', function () {
  var myMock = jest.fn();
  var mockFn = jest.fn();
  global.console = {
    error: myMock
  };
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginForm["default"], {
    onChangeRememberMe: mockFn,
    rememberMeAriaLabel: "remember me",
    rememberMeLabel: "remember me"
  }));
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});