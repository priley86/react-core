"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Stack = _interopRequireDefault(require("./Stack"));

var _StackItem = _interopRequireDefault(require("./StackItem"));

var _gutters = require("../../styles/gutters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('isMain set to true', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Stack["default"], null, _react["default"].createElement(_StackItem["default"], {
    isFilled: true
  }, "Filled content")));
  expect(view).toMatchSnapshot();
});
test('isMain defaults to false', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Stack["default"], null, _react["default"].createElement(_StackItem["default"], null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(_gutters.GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Stack["default"], {
      gutter: gutter
    }, _react["default"].createElement(_StackItem["default"], null, "Basic content")));
    expect(view).toMatchSnapshot();
  });
});