import ModalBox from './ModalBox';
import React from 'react';
import { shallow } from 'enzyme';
test('ModalBox Test', function () {
  var view = shallow(React.createElement(ModalBox, {
    titleId: "titleId",
    ariaDescribedById: "bodyId"
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
test('ModalBox Test isLarge', function () {
  var view = shallow(React.createElement(ModalBox, {
    titleId: "titleId",
    ariaDescribedById: "bodyId",
    isLarge: true
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});
test('ModalBox Test isOpen', function () {
  var view = shallow(React.createElement(ModalBox, {
    titleId: "titleId",
    ariaDescribedById: "bodyId",
    isLarge: true,
    isOpen: true
  }, "This is a ModalBox"));
  expect(view).toMatchSnapshot();
});