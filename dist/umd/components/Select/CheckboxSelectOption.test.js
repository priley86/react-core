"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./CheckboxSelectOption"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./CheckboxSelectOption"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.CheckboxSelectOption);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _CheckboxSelectOption) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxSelectOption2 = _interopRequireDefault(_CheckboxSelectOption);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('checkbox select options', function () {
    test('renders with value parameter successfully', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_CheckboxSelectOption2["default"], {
        value: "test",
        sendRef: jest.fn()
      }));
      expect(view).toMatchSnapshot();
    });
    describe('hover', function () {
      test('renders with checked successfully', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_CheckboxSelectOption2["default"], {
          isChecked: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
    describe('disabled', function () {
      test('renders disabled successfully', function () {
        var view = (0, _enzyme.mount)(_react2["default"].createElement(_CheckboxSelectOption2["default"], {
          isDisabled: true,
          value: "test",
          sendRef: jest.fn()
        }));
        expect(view).toMatchSnapshot();
      });
    });
  });
});