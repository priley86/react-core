"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./SelectOption"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./SelectOption"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.SelectOption);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _SelectOption) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _SelectOption2 = _interopRequireDefault(_SelectOption);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('select options', function () {
    test('renders with value parameter successfully', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_SelectOption2["default"], {
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
    describe('hover', function () {
      test('renders with hover successfully', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_SelectOption2["default"], {
          isHovered: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
    describe('disabled', function () {
      test('renders disabled successfully', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_SelectOption2["default"], {
          isDisabled: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
    describe('is selected', function () {
      test('renders selected successfully', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_SelectOption2["default"], {
          isSelected: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
});