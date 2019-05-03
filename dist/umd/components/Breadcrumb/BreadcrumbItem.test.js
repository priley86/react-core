"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./BreadcrumbItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./BreadcrumbItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.BreadcrumbItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _BreadcrumbItem, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _BreadcrumbItem2 = _interopRequireDefault(_BreadcrumbItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('BreadcrumbItem component', function () {
    test('should render default breadcrumbItem', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], null, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with className', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], {
        className: "Class"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with id', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], {
        id: "Item 1"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render active breadcrumbItem', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], {
        isActive: true
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render link breadcrumbItem', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], {
        to: "/somewhere"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with target', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], {
        target: "/somewhere"
      }, "Item"));
      expect(view).toMatchSnapshot();
    });
    test('should render breadcrumbItem with custom element', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_BreadcrumbItem2["default"], null, _react2["default"].createElement("h1", null, "Header")));
      expect(view).toMatchSnapshot();
    });
  });
});