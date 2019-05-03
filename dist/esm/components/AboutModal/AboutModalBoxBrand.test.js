import React from 'react';
import { shallow } from 'enzyme';
import AboutModalBoxBrand from './AboutModalBoxBrand';
test('test About Modal Brand', function () {
  var view = shallow(React.createElement(AboutModalBoxBrand, {
    src: "testimage..",
    alt: "brand"
  }));
  expect(view).toMatchSnapshot();
});