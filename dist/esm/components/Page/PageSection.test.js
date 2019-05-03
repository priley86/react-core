import React from 'react';
import { mount } from 'enzyme';
import PageSection from './PageSection';
jest.mock('./Page');
test('Check page section with no padding example against snapshot', function () {
  var Section = React.createElement(PageSection, {
    noPadding: true
  });
  var view = mount(Section);
  expect(view).toMatchSnapshot();
});
test('Check page section with no padding on mobile example against snapshot', function () {
  var Section = React.createElement(PageSection, {
    noPaddingMobile: true
  });
  var view = mount(Section);
  expect(view).toMatchSnapshot();
});