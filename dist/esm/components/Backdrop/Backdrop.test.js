import React from 'react';
import { shallow } from 'enzyme';
import Backdrop from './Backdrop';
test('Backdrop Test', function () {
  var view = shallow(React.createElement(Backdrop, null, "Backdrop"));
  expect(view).toMatchSnapshot();
});