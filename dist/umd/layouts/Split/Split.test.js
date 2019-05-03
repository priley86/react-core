"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Split", "./SplitItem", "../../styles/gutters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Split"), require("./SplitItem"), require("../../styles/gutters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Split, global.SplitItem, global.gutters);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Split, _SplitItem, _gutters) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Split2 = _interopRequireDefault(_Split);

  var _SplitItem2 = _interopRequireDefault(_SplitItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('isMain', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Split2["default"], null, _react2["default"].createElement(_SplitItem2["default"], {
      isMain: true
    }, "Main content")));
    expect(view).toMatchSnapshot();
  });
  test('isMain defaults to false', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Split2["default"], null, _react2["default"].createElement(_SplitItem2["default"], null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
  Object.values(_gutters.GutterSize).forEach(function (gutter) {
    test("Gutter ".concat(gutter), function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Split2["default"], {
        gutter: gutter
      }, _react2["default"].createElement(_SplitItem2["default"], null, "Basic Content")));
      expect(view).toMatchSnapshot();
    });
  });
});