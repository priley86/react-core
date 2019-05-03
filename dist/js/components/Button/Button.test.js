"use strict";

var _Button = _interopRequireWildcard(require("./Button"));

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

Object.values(_Button.ButtonVariant).forEach(function (variant) {
  test("".concat(variant, " button"), function () {
    var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
      variant: variant,
      "aria-label": variant
    }, variant, " Button"));
    expect(view).toMatchSnapshot();
  });
});
test('it adds an aria-label to plain buttons', function () {
  var label = 'aria-label test';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    variant: _Button.ButtonVariant.action,
    "aria-label": label
  }));
  expect(view.find('button').props()['aria-label']).toBe(label);
});
test('isBlock', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    isBlock: true
  }, "Block Button"));
  expect(view).toMatchSnapshot();
});
test('isDisabled', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    isDisabled: true
  }, "Disabled Button"));
  expect(view).toMatchSnapshot();
});
test('isFocus', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    isFocus: true
  }, "Focused Button"));
  expect(view).toMatchSnapshot();
});
test('isHover', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    isHover: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('isInline', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    variant: _Button.ButtonVariant.link,
    isInline: true
  }, "Hovered Button"));
  expect(view).toMatchSnapshot();
});
test('allows passing in a string as the component', function () {
  var component = 'a';
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    component: component
  }));
  expect(view.type()).toBe(component);
});
test('allows passing in a React Component as the component', function () {
  var Component = function Component() {
    return null;
  };

  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    component: Component
  }));
  expect(view.type()).toBe(Component);
});
test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_Button["default"], {
    component: "a",
    isDisabled: true
  }, "Disabled Anchor Button"));
  expect(view).toMatchSnapshot();
});