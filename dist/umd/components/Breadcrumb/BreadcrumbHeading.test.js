"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./BreadcrumbHeading", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./BreadcrumbHeading"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.BreadcrumbHeading, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _BreadcrumbHeading, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _BreadcrumbHeading2 = _interopRequireDefault(_BreadcrumbHeading);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('BreadcrumbHeading component', function () {
    test('should render default breadcrumbHeading', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbHeading2["default"], null, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should pass classname', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbHeading2["default"], {
        className: "Class"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should pass custom id', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbHeading2["default"], {
        id: "Id"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render link breadcrumbTItle', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbHeading2["default"], {
        to: "/somewhere"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbHeading with target', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbHeading2["default"], {
        to: "#here",
        target: "_blank"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
  });
});