import React from 'react';
import { shallow } from 'enzyme';
import LoginPage from './LoginPage';
var needAccountMesseage = React.createElement(React.Fragment, null, "Login to your account ", React.createElement("a", {
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
  var view = shallow(React.createElement(LoginPage, props));
  expect(view).toMatchSnapshot();
});