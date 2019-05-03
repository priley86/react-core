import React from 'react';
import LoginMainHeader from './LoginMainHeader';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(LoginMainHeader, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(LoginMainHeader, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-header';
  var view = shallow(React.createElement(LoginMainHeader, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('title and subtitle are rendered correctly', function () {
  var view = shallow(React.createElement(LoginMainHeader, {
    title: "Log in to your account",
    subtitle: "Use LDAP credentials"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});