import React from 'react';
import LoginMainFooter from './LoginMainFooter';
import { shallow } from 'enzyme';
test('renders with PatternFly Core styles', function () {
  var view = shallow(React.createElement(LoginMainFooter, null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = shallow(React.createElement(LoginMainFooter, {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-body';
  var view = shallow(React.createElement(LoginMainFooter, {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});