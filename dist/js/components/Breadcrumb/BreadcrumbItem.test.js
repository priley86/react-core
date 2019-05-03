"use strict";

var _react = _interopRequireDefault(require("react"));

var _BreadcrumbItem = _interopRequireDefault(require("./BreadcrumbItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('BreadcrumbItem component', function () {
  test('should render default breadcrumbItem', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with className', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with id', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], {
      id: "Item 1"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render active breadcrumbItem', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], {
      isActive: true
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbItem', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with target', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], {
      target: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbItem with custom element', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbItem["default"], null, _react["default"].createElement("h1", null, "Header")));
    expect(view).toMatchSnapshot();
  });
});