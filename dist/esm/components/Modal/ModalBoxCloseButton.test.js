import React from 'react';
import { shallow } from 'enzyme';
import ModalBoxCloseButton from './ModalBoxCloseButton';
test('ModalBoxCloseButton Test', function () {
  var view = shallow(React.createElement(ModalBoxCloseButton, null));
  expect(view).toMatchSnapshot();
});