"use strict";

var _react = _interopRequireDefault(require("react"));

var _BreadcrumbHeading = _interopRequireDefault(require("./BreadcrumbHeading"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

describe('BreadcrumbHeading component', function () {
  test('should render default breadcrumbHeading', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbHeading["default"], null, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should pass classname', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbHeading["default"], {
      className: "Class"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should pass custom id', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbHeading["default"], {
      id: "Id"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render link breadcrumbTItle', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbHeading["default"], {
      to: "/somewhere"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
  test('should render breadcrumbHeading with target', function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_BreadcrumbHeading["default"], {
      to: "#here",
      target: "_blank"
    }, "Item"));
    expect(view).toMatchSnapshot();
  });
});