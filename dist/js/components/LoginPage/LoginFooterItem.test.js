"use strict";

var _react = _interopRequireDefault(require("react"));

var _LoginFooterItem = _interopRequireDefault(require("./LoginFooterItem"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('renders with PatternFly Core styles', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginFooterItem["default"], {
    target: "_self",
    href: "#"
  }));
  expect(view).toMatchSnapshot();
});
test('className is added to the root element', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginFooterItem["default"], {
    className: "extra-class"
  }));
  expect(view.prop('className')).toMatchSnapshot();
});
test('extra props are spread to the root element', function () {
  var testId = 'login-body';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginFooterItem["default"], {
    "data-testid": testId
  }));
  expect(view.prop('data-testid')).toBe(testId);
});
test('LoginFooterItem  with custom node', function () {
  var CustomNode = function CustomNode() {
    return _react["default"].createElement("div", null, "My custom node");
  };

  var view = (0, _enzyme.shallow)(_react["default"].createElement(_LoginFooterItem["default"], null, _react["default"].createElement(CustomNode, null)));
  expect(view).toMatchSnapshot();
});