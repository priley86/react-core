"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./Breadcrumb", "./BreadcrumbItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./Breadcrumb"), require("./BreadcrumbItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.Breadcrumb, global.BreadcrumbItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _Breadcrumb, _BreadcrumbItem, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Breadcrumb2 = _interopRequireDefault(_Breadcrumb);

  var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Breadcrumb component', function () {
    test('should render default breadcrumb', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Breadcrumb2["default"], null));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with className', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Breadcrumb2["default"], {
        className: "className"
      }));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with aria-label', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Breadcrumb2["default"], {
        "aria-label": "custom label"
      }));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumb with children', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Breadcrumb2["default"], null, _react2["default"].createElement(_BreadcrumbItem2["default"], {
        to: "#"
      }, "Item 1"), " ", _react2["default"].createElement(_BreadcrumbItem2["default"], {
        to: "#"
      }, "Item 1")));
      expect(view).toMatchSnapshot();
    });
  });
});