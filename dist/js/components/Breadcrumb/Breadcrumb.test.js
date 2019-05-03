"use strict";

var _react = _interopRequireDefault(require("react"));

var _Breadcrumb = _interopRequireDefault(require("./Breadcrumb"));

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('Breadcrumb component', function () {
  test('should render default breadcrumb', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Breadcrumb["default"], null));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumb with className', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Breadcrumb["default"], {
      className: "className"
    }));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumb with aria-label', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Breadcrumb["default"], {
      "aria-label": "custom label"
    }));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumb with children', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Breadcrumb["default"], null, _react["default"].createElement(_BreadcrumbItem["default"], {
      to: "#"
    }, "Item 1"), " ", _react["default"].createElement(_BreadcrumbItem["default"], {
      to: "#"
    }, "Item 1")));
    expect(view).toMatchSnapshot();
  });
});