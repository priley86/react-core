"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Grid", "../../styles/gutters", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Grid"), require("../../styles/gutters"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Grid, global.gutters, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _Grid, _gutters, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Grid2 = _interopRequireDefault(_Grid);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values(_gutters.GutterSize).forEach(function (gutter) {
    test("gutter ".concat(gutter), function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Grid2["default"], {
        gutter: gutter
      }));
      expect(view).toMatchSnapshot();
    });
  });
});