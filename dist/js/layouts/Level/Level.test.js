"use strict";

var _react = _interopRequireDefault(require("react"));

var _Level = _interopRequireDefault(require("./Level"));

var _gutters = require("../../styles/gutters");

var _LevelItem = _interopRequireDefault(require("./LevelItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.values(_gutters.GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Level["default"], {
      gutter: gutter
    }));
    expect(view).toMatchSnapshot();
  });
});
test('item', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LevelItem["default"], null, "Level Item"));
  expect(view).toMatchSnapshot();
});