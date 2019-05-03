"use strict";

var _react = _interopRequireDefault(require("react"));

var _GridItem = _interopRequireDefault(require("./GridItem"));

var _enzyme = require("enzyme");

var _sizes = require("../../styles/sizes");

var _gridUtils = require("./gridUtils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

test('adds span class', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_GridItem["default"], {
    span: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
test('adds offset class', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_GridItem["default"], {
    offset: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
test('adds row class', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_GridItem["default"], {
    rowSpan: 4
  }));
  expect(view.props().className).toMatchSnapshot();
});
Object.values(_sizes.DeviceSizes).forEach(function (size) {
  test("adds ".concat(size, " span class"), function () {
    var props = _defineProperty({}, size, 4);

    var view = (0, _enzyme.shallow)(_react["default"].createElement(_GridItem["default"], props));
    expect(view.props().className).toMatchSnapshot();
  });
  test("adds ".concat(size, " offset classes"), function () {
    var props = _defineProperty({}, (0, _gridUtils.getOffsetKey)(size), 1);

    var view = (0, _enzyme.shallow)(_react["default"].createElement(_GridItem["default"], props));
    expect(view.props().className).toMatchSnapshot();
  });
  test("adds ".concat(size, " row classes"), function () {
    var props = _defineProperty({}, (0, _gridUtils.getRowSpanKey)(size), 1);

    var view = (0, _enzyme.shallow)(_react["default"].createElement(_GridItem["default"], props));
    expect(view.props().className).toMatchSnapshot();
  });
});