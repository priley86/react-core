"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ChipButton", "./Chip"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ChipButton"), require("./Chip"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ChipButton, global.Chip);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ChipButton, _Chip) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ChipButton2 = _interopRequireDefault(_ChipButton);

  var _Chip2 = _interopRequireDefault(_Chip);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('ChipButton', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ChipButton2["default"], {
      id: "my-chip-button",
      className: "chip-bttn-cls"
    }, _react2["default"].createElement("b", null, "Close")));
    expect(view).toMatchSnapshot();
  });
  describe('Chip', function () {
    test('overflow', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Chip2["default"], {
        className: "my-chp-cls",
        isOverflowChip: true
      }, "4 more"));
      expect(view).toMatchSnapshot();
    });
    test('closable', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Chip2["default"], {
        className: "my-chp-cls",
        id: "chip_one"
      }, "Chip"));
      expect(view).toMatchSnapshot();
    });
    test('closable with tooltip', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Chip2["default"], {
        className: "my-chp-cls",
        id: "chip_one"
      }, "1234567890123456789"));
      expect(view).toMatchSnapshot();
    });
    test('readonly', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Chip2["default"], {
        className: "my-chp-cls",
        isReadOnly: true
      }, "4 more"));
      expect(view).toMatchSnapshot();
    });
  });
});