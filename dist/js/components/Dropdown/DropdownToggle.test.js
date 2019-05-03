"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _DropdownToggle = _interopRequireDefault(require("./DropdownToggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('API', function () {
  test('click on closed', function () {
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
      onToggle: mockToggle,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    view.find('button').first().simulate('click');
    expect(mockToggle.mock.calls[0][0]).toBe(true);
  });
  test('click on opened', function () {
    var mockToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
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
    (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
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
    (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
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
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
      id: "Dropdown Toggle",
      isHovered: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('active', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
      id: "Dropdown Toggle",
      isActive: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('focus', function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_DropdownToggle["default"], {
      id: "Dropdown Toggle",
      isFocused: true,
      parentRef: document.createElement('div')
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
});