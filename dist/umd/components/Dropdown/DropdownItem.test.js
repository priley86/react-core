"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DropdownItem", "./Separator"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DropdownItem"), require("./Separator"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DropdownItem, global.Separator);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _DropdownItem, _Separator) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _DropdownItem2 = _interopRequireDefault(_DropdownItem);

  var _Separator2 = _interopRequireDefault(_Separator);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('dropdown items', function () {
    test('a', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownItem2["default"], null, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('button', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownItem2["default"], {
        component: "button"
      }, "Something"));
      expect(view).toMatchSnapshot();
    });
    test('separator', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Separator2["default"], null));
      expect(view).toMatchSnapshot();
    });
    describe('hover', function () {
      test('a', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownItem2["default"], {
          isHovered: true
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
      test('button', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownItem2["default"], {
          isHovered: true,
          component: "button"
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
    });
    describe('disabled', function () {
      test('a', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownItem2["default"], {
          isDisabled: true
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
      test('button', function () {
        var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownItem2["default"], {
          isDisabled: true,
          component: "button"
        }, "Something"));
        expect(view).toMatchSnapshot();
      });
    });
  });
});