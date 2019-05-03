import React from 'react';
import { mount } from 'enzyme';
import PageHeader from './PageHeader';
jest.mock('./Page');
test('Check page vertical layout example against snapshot', function () {
  var Header = React.createElement(PageHeader, {
    logo: "Logo",
    toolbar: "Toolbar",
    avatar: " | Avatar",
    onNavToggle: function onNavToggle() {
      return undefined;
    }
  });
  var view = mount(Header);
  expect(view).toMatchSnapshot();
});