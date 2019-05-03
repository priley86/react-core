"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DropdownToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DropdownToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DropdownToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _DropdownToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('API', function () {
    test('click on closed', function () {
      var mockToggle = jest.fn();
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
        onToggle: mockToggle,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      view.find('button').first().simulate('click');
      expect(mockToggle.mock.calls[0][0]).toBe(true);
    });
    test('click on opened', function () {
      var mockToggle = jest.fn();
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
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
      (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
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
      (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
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
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
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
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
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
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
        id: "Dropdown Toggle",
        isHovered: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      expect(view).toMatchSnapshot();
    });
    test('active', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
        id: "Dropdown Toggle",
        isActive: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      expect(view).toMatchSnapshot();
    });
    test('focus', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
        id: "Dropdown Toggle",
        isFocused: true,
        parentRef: document.createElement('div')
      }, "Dropdown"));
      expect(view).toMatchSnapshot();
    });
  });
});