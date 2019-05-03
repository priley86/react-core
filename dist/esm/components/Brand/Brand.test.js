import React from 'react';
import { shallow } from 'enzyme';
import Brand from './Brand';
test('simple brand', function () {
  var view = shallow(React.createElement(Brand, {
    alt: "brand"
  }));
  expect(view).toMatchSnapshot();
});