"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Level", "../../styles/gutters", "./LevelItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Level"), require("../../styles/gutters"), require("./LevelItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Level, global.gutters, global.LevelItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _Level, _gutters, _LevelItem, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Level2 = _interopRequireDefault(_Level);

  var _LevelItem2 = _interopRequireDefault(_LevelItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values(_gutters.GutterSize).forEach(function (gutter) {
    test("Gutter ".concat(gutter), function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Level2["default"], {
        gutter: gutter
      }));
      expect(view).toMatchSnapshot();
    });
  });
  test('item', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LevelItem2["default"], null, "Level Item"));
    expect(view).toMatchSnapshot();
  });
});