"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Split = _interopRequireDefault(require("./Split"));

var _SplitItem = _interopRequireDefault(require("./SplitItem"));

var _gutters = require("../../styles/gutters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('isMain', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Split["default"], null, _react["default"].createElement(_SplitItem["default"], {
    isMain: true
  }, "Main content")));
  expect(view).toMatchSnapshot();
});
test('isMain defaults to false', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Split["default"], null, _react["default"].createElement(_SplitItem["default"], null, "Basic content")));
  expect(view).toMatchSnapshot();
});
Object.values(_gutters.GutterSize).forEach(function (gutter) {
  test("Gutter ".concat(gutter), function () {
    var view = (0, _enzyme.mount)(_react["default"].createElement(_Split["default"], {
      gutter: gutter
    }, _react["default"].createElement(_SplitItem["default"], null, "Basic Content")));
    expect(view).toMatchSnapshot();
  });
});