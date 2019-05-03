"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelectorItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelectorItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelectorItem);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ContextSelectorItem) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ContextSelectorItem2 = _interopRequireDefault(_ContextSelectorItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Renders ContextSelectorItem', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelectorItem2["default"], {
      sendRef: jest.fn(),
      index: "0"
    }, "My Project"));
    expect(view).toMatchSnapshot();
  });
  test('Renders ContextSelectorItem disabled and hovered', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelectorItem2["default"], {
      isDisabled: true,
      isHovered: true,
      sendRef: jest.fn(),
      index: "0"
    }, "My Project"));
    expect(view).toMatchSnapshot();
  });
  test('Verify onClick is called ', function () {
    var mockfn = jest.fn();
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelectorItem2["default"], {
      isHovered: true,
      onClick: mockfn,
      sendRef: jest.fn(),
      index: "0"
    }, "My Project"));
    view.find('button').at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});