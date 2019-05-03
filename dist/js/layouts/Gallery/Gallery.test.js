"use strict";

var _react = _interopRequireDefault(require("react"));

var _Gallery = _interopRequireDefault(require("./Gallery"));

var _gutters = require("../../styles/gutters");

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

Object.values(_gutters.GutterSize).forEach(function (gutter) {
  test("gutter ".concat(gutter), function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Gallery["default"], {
      gutter: gutter
    }));
    expect(view).toMatchSnapshot();
  });
});