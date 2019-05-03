"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ContextSelector", "./ContextSelectorItem"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ContextSelector"), require("./ContextSelectorItem"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ContextSelector, global.ContextSelectorItem);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ContextSelector, _ContextSelectorItem) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ContextSelector2 = _interopRequireDefault(_ContextSelector);

  var _ContextSelectorItem2 = _interopRequireDefault(_ContextSelectorItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var items = [_react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "0"
  }, "My Project"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "1"
  }, "OpenShift Cluster"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "2"
  }, "Production Ansible"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "3"
  }, "AWS"), _react2["default"].createElement(_ContextSelectorItem2["default"], {
    key: "4"
  }, "Azure")];
  test('Renders ContextSelector', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelector2["default"], null, " ", items, " "));
    expect(view).toMatchSnapshot();
  });
  test('Renders ContextSelector open', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ContextSelector2["default"], {
      isOpen: true
    }, " ", items, " "));
    expect(view).toMatchSnapshot();
  });
  test('Verify onToggle is called ', function () {
    var mockfn = jest.fn();
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_ContextSelector2["default"], {
      onToggle: mockfn
    }, " ", items, " "));
    view.find('button').at(0).simulate('click');
    expect(mockfn.mock.calls).toHaveLength(1);
  });
});