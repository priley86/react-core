import React from 'react';
import { shallow } from 'enzyme';
import AboutModalBoxHero from './AboutModalBoxHero';
test('test About Modal Box SHero', function () {
  var view = shallow(React.createElement(AboutModalBoxHero, null));
  expect(view).toMatchSnapshot();
});