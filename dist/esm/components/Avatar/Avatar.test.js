import * as React from 'react';
import { shallow } from 'enzyme';
import { Avatar } from './Avatar';
test('simple avatar', function () {
  var view = shallow(React.createElement(Avatar, {
    alt: "avatar"
  }));
  expect(view).toMatchSnapshot();
});