import React from 'react';
import { mount } from 'enzyme';
import DropdownToggle from './DropdownToggle';
describe('API', function () {
  test('click on closed', function () {
    var mockToggle = jest.fn();
    var view = mount(React.createElement(DropdownToggle, {
      onToggle: mockToggle,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });
  test('click on opened', function () {
    var mockToggle = jest.fn();
    var view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('click on document', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var mockToggle = jest.fn();
    mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    map.mousedown({
      target: document
    });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('touch on document', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var mockToggle = jest.fn();
    mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    map.touchstart({
      target: document
    });
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('on click outside has been removed', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      if (map[event] === cb) map[event] = function () {};
    });
    var mockToggle = jest.fn();
    var view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.unmount();
    map.mousedown({
      target: document
    });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('mousedown', expect.any(Function));
  });
  test('on touch outside has been removed', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    document.removeEventListener = jest.fn(function (event, cb) {
      if (map[event] === cb) map[event] = function () {};
    });
    var mockToggle = jest.fn();
    var view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      onToggle: mockToggle,
      isOpen: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.unmount();
    map.touchstart({
      target: document
    });
    expect(mockToggle.mock.calls).toHaveLength(0);
    expect(document.removeEventListener).toHaveBeenCalledWith('touchstart', expect.any(Function));
  });
});
describe('state', function () {
  test('hover', function () {
    var view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isHovered: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('active', function () {
    var view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isActive: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('focus', function () {
    var view = mount(React.createElement(DropdownToggle, {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
});