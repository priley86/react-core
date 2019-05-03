"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Brand = _interopRequireDefault(require("./Brand"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('simple brand', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Brand["default"], {
    alt: "brand"
  }));
  expect(view).toMatchSnapshot();
});