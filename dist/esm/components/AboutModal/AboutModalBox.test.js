import AboutModalBox from './AboutModalBox';
import React from 'react';
import { shallow } from 'enzyme';
test('AboutModalBox Test', function () {
  var view = shallow(React.createElement(AboutModalBox, {
    "aria-labelledby": "id",
    "aria-describedby": "id2"
  }, "This is a AboutModalBox"));
  expect(view).toMatchSnapshot();
});