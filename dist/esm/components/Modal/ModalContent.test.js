import React from 'react';
import { shallow } from 'enzyme';
import ModalContent from './ModalContent';
test('Modal Content Test only body', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test isOpen', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with header', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true,
    header: "Testing"
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with footer', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true,
    actions: ['Testing']
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content test without footer', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with header and footer', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    header: "Testing header",
    id: "id",
    isOpen: true,
    actions: ['Testing footer']
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});
test('Modal Content Test with onclose', function () {
  var view = shallow(React.createElement(ModalContent, {
    title: "Test Modal Content title",
    header: "Testing header",
    actions: ['Testing footer'],
    isLarge: true,
    onclose: function onclose() {
      return undefined;
    },
    id: "id",
    isOpen: true
  }, "This is a ModalBox header"));
  expect(view).toMatchSnapshot();
});