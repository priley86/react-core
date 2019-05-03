"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Stack", "./StackItem", "../../styles/gutters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Stack"), require("./StackItem"), require("../../styles/gutters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Stack, global.StackItem, global.gutters);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Stack, _StackItem, _gutters) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Stack2 = _interopRequireDefault(_Stack);

  var _StackItem2 = _interopRequireDefault(_StackItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('isMain set to true', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Stack2["default"], null, _react2["default"].createElement(_StackItem2["default"], {
      isFilled: true
    }, "Filled content")));
    expect(view).toMatchSnapshot();
  });
  test('isMain defaults to false', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Stack2["default"], null, _react2["default"].createElement(_StackItem2["default"], null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
  Object.values(_gutters.GutterSize).forEach(function (gutter) {
    test("Gutter ".concat(gutter), function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Stack2["default"], {
        gutter: gutter
      }, _react2["default"].createElement(_StackItem2["default"], null, "Basic content")));
      expect(view).toMatchSnapshot();
    });
  });
});