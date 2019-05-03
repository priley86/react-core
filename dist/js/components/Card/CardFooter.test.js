"use strict";

var _react = _interopRequireDefault(require("react"));

var _CardFooter = _interopRequireDefault(require("./CardFooter"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter["default"], null));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter["default"], {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'card-footer';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter["default"], {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('allows passing in a string as the component', function () {
  var component = 'div';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter["default"], {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return null;
  };

  var view = (0, _enzyme.shallow)(_react["default"].createElement(_CardFooter["default"], {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});