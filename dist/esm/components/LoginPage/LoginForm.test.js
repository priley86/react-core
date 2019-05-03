import React from 'react';
import { shallow } from 'enzyme';
import LoginForm from './LoginForm';
test('should render Login form', function () {
  var view = shallow(React.createElement(LoginForm, null));
  expect(view).toMatchSnapshot();
});
test('default function onChangeUsername', function () {
  var view = shallow(React.createElement(LoginForm, {
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-username-id').simulate('change');
  var result = LoginForm.defaultProps.onChangeUsername();
  expect(result).toBe(undefined);
});
test('should call onChangeUsername callback', function () {
  var mockFn = jest.fn();
  var view = shallow(React.createElement(LoginForm, {
    onChangeUsername: mockFn,
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-username-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('default function onChangePassword', function () {
  var view = shallow(React.createElement(LoginForm, {
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-password-id').simulate('change');
  var result = LoginForm.defaultProps.onChangePassword();
  expect(result).toBe(undefined);
});
test('should call onChangePassword callback', function () {
  var mockFn = jest.fn();
  var view = shallow(React.createElement(LoginForm, {
    onChangePassword: mockFn,
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-password-id').simulate('change');
  expect(mockFn).toHaveBeenCalled();
});
test('default function onChangeRememberMe', function () {
  var view = shallow(React.createElement(LoginForm, {
    rememberMeLabel: "Login Form",
    rememberMeAriaLabel: "Login Form"
  }));
  view.find('#pf-login-remember-me-id').simulate('change');
  var result = LoginForm.defaultProps.onChangeRememberMe();
  expect(result).toBe(undefined);
});
test('should call onChangeRememberMe callback', function () {
  var mockFn = jest.fn();
  var view = shallow(React.createElement(LoginForm, {
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
  var view = shallow(React.createElement(LoginForm, {
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
  var view = shallow(React.createElement(LoginForm, {
    onChangeRememberMe: mockFn,
    rememberMeAriaLabel: "remember me",
    rememberMeLabel: "remember me"
  }));
  expect(view).toMatchSnapshot();
  expect(myMock).not.toBeCalled();
});