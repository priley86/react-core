import ModalBoxHeader from './ModalBoxHeader';
import React from 'react';
import { shallow } from 'enzyme';
test('ModalBoxHeader Test', function () {
  var view = shallow(React.createElement(ModalBoxHeader, null, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});