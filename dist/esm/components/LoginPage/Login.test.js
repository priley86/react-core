import React from 'react';
import { shallow } from 'enzyme';
import Login from './Login';
import LoginFooter from './LoginFooter';
import LoginHeader from './LoginHeader';
test('Check login layout example against snapshot', function () {
  var Header = React.createElement(LoginHeader, {
    headerBrand: "HeaderBrand"
  }, "Header Text");
  var Footer = React.createElement(LoginFooter, null, "Footer");
  var view = shallow(React.createElement(Login, {
    footer: Footer,
    header: Header
  }, "Main"));
  expect(view).toMatchSnapshot();
});