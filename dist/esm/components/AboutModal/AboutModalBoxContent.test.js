import AboutModalBoxContent from './AboutModalBoxContent';
import React from 'react';
import { shallow } from 'enzyme';
test('AboutModalBoxContent Test', function () {
  var view = shallow(React.createElement(AboutModalBoxContent, {
    trademark: "trademark",
    id: "id"
  }, "This is a AboutModalBoxContent"));
  expect(view).toMatchSnapshot();
});