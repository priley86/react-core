"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ChipButton = _interopRequireDefault(require("./ChipButton"));

var _Chip = _interopRequireDefault(require("./Chip"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('ChipButton', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ChipButton["default"], {
    id: "my-chip-button",
    className: "chip-bttn-cls"
  }, _react["default"].createElement("b", null, "Close")));
  expect(view).toMatchSnapshot();
});
describe('Chip', function () {
  test('overflow', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip["default"], {
      className: "my-chp-cls",
      isOverflowChip: true
    }, "4 more"));
    expect(view).toMatchSnapshot();
  });
  test('closable', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip["default"], {
      className: "my-chp-cls",
      id: "chip_one"
    }, "Chip"));
    expect(view).toMatchSnapshot();
  });
  test('closable with tooltip', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip["default"], {
      className: "my-chp-cls",
      id: "chip_one"
    }, "1234567890123456789"));
    expect(view).toMatchSnapshot();
  });
  test('readonly', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Chip["default"], {
      className: "my-chp-cls",
      isReadOnly: true
    }, "4 more"));
    expect(view).toMatchSnapshot();
  });
});