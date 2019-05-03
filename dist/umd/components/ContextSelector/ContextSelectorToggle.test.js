"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelectorToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelectorToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelectorToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ContextSelectorToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ContextSelectorToggle2 = _interopRequireDefault(_ContextSelectorToggle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Renders ContextSelectorToggle', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelectorToggle2["default"], {
      id: "toggle-id"
    }));
    expect(view).toMatchSnapshot();
  });
  test('Verify onToggle is called ', function () {
    var mockfnOnToggle = jest.fn();
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelectorToggle2["default"], {
      onToggle: mockfnOnToggle,
      id: "toggle-id"
    }));
    view.find('button').at(0).simulate('click');
    expect(mockfnOnToggle.mock.calls).toHaveLength(1);
  });
  test('Verify ESC press ', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelectorToggle2["default"], {
      isOpen: true,
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Escape'
    });
    expect(view).toMatchSnapshot();
  });
  test('Verify ESC press with not isOpen', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelectorToggle2["default"], {
      onToggle: jest.fn(),
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Escape'
    });
    expect(view).toMatchSnapshot();
  });
  test('Verify keydown tab ', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelectorToggle2["default"], {
      isOpen: true,
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Tab'
    });
    expect(view).toMatchSnapshot();
  });
  test('Verify keydown enter ', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelectorToggle2["default"], {
      onToggle: jest.fn(),
      onEnter: jest.fn(),
      id: "toggle-id"
    }));
    view.simulate('keyDown', {
      key: 'Enter'
    });
    expect(view).toMatchSnapshot();
  });
});