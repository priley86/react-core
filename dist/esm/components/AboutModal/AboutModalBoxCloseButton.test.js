import React from 'react';
import { shallow } from 'enzyme';
import AboutModalBoxCloseButton from './AboutModalBoxCloseButton';
test('AboutModalBoxCloseButton Test', function () {
  var view = shallow(React.createElement(AboutModalBoxCloseButton, null));
  expect(view).toMatchSnapshot();
});
test('AboutModalBoxCloseButton Test onclose', function () {
  var onClose = jest.fn();
  var view = shallow(React.createElement(AboutModalBoxCloseButton, {
    onclose: onClose
  }));
  expect(view).toMatchSnapshot();
});