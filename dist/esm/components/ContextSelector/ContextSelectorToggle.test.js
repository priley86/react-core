import React from 'react';
import { shallow, mount } from 'enzyme';
import ContextSelectorToggle from './ContextSelectorToggle';
test('Renders ContextSelectorToggle', function () {
  var view = shallow(React.createElement(ContextSelectorToggle, {
    id: "toggle-id"
  }));
  expect(view).toMatchSnapshot();
});
test('Verify onToggle is called ', function () {
  var mockfnOnToggle = jest.fn();
  var view = mount(React.createElement(ContextSelectorToggle, {
    onToggle: mockfnOnToggle,
    id: "toggle-id"
  }));
  view.find('button').at(0).simulate('click');
  expect(mockfnOnToggle.mock.calls).toHaveLength(1);
});
test('Verify ESC press ', function () {
  var view = mount(React.createElement(ContextSelectorToggle, {
    isOpen: true,
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Escape'
  });
  expect(view).toMatchSnapshot();
});
test('Verify ESC press with not isOpen', function () {
  var view = mount(React.createElement(ContextSelectorToggle, {
    onToggle: jest.fn(),
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Escape'
  });
  expect(view).toMatchSnapshot();
});
test('Verify keydown tab ', function () {
  var view = mount(React.createElement(ContextSelectorToggle, {
    isOpen: true,
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Tab'
  });
  expect(view).toMatchSnapshot();
});
test('Verify keydown enter ', function () {
  var view = mount(React.createElement(ContextSelectorToggle, {
    onToggle: jest.fn(),
    onEnter: jest.fn(),
    id: "toggle-id"
  }));
  view.simulate('keyDown', {
    key: 'Enter'
  });
  expect(view).toMatchSnapshot();
});