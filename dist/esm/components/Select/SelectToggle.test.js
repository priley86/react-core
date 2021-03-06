import React from 'react';
import { mount } from 'enzyme';
import SelectToggle from './SelectToggle';
describe('API', function () {
  test('click on closed', function () {
    var mockToggle = jest.fn();
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      parentRef: document.createElement('div')
    }, "Select"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });
  test('click on opened', function () {
    var mockToggle = jest.fn();
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: document.createElement('div')
    }, "Select"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(false);
  });
  test('click on document', function () {
    var map = {};
    document.addEventListener = jest.fn(function (event, cb) {
      map[event] = cb;
    });
    var mockToggle = jest.fn();
    mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: document.createElement('div')
    }, "Select"));
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
    mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: document.createElement('div')
    }, "Select"));
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
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: document.createElement('div')
    }, "Select"));
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
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      onToggle: mockToggle,
      isExpanded: true,
      parentRef: document.createElement('div')
    }, "Select"));
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
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      isHovered: true,
      parentRef: document.createElement('div')
    }, "Select"));
    expect(view).toMatchSnapshot();
  });
  test('active', function () {
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      isActive: true,
      parentRef: document.createElement('div')
    }, "Select"));
    expect(view).toMatchSnapshot();
  });
  test('focus', function () {
    var view = mount(React.createElement(SelectToggle, {
      id: "Select Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Select"));
    expect(view).toMatchSnapshot();
  });
});