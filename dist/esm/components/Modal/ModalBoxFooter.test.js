import React from 'react';
import { shallow } from 'enzyme';
import ModalBoxFooter from './ModalBoxFooter';
test('ModalBoxFooter Test', function () {
  var view = shallow(React.createElement(ModalBoxFooter, null, "This is a ModalBox Footer"));
  expect(view).toMatchSnapshot();
});