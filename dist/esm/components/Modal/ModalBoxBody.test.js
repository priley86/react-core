import ModalBoxBody from './ModalBoxBody';
import React from 'react';
import { shallow } from 'enzyme';
test('ModalBoxBody Test', function () {
  var view = shallow(React.createElement(ModalBoxBody, {
    id: "id"
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});