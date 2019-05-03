"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./Button", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./Button"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Button, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_Button, _react, _enzyme) {
  "use strict";

  var _Button2 = _interopRequireDefault(_Button);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values(_Button.ButtonVariant).forEach(function (variant) {
    test("".concat(variant, " button"), function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
        variant: variant,
        "aria-label": variant
      }, variant, " Button"));
      expect(view).toMatchSnapshot();
    });
  });
  test('it adds an aria-label to plain buttons', function () {
    var label = 'aria-label test';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      variant: _Button.ButtonVariant.action,
      "aria-label": label
    }));
    expect(view.find('button').props()['aria-label']).toBe(label);
  });
  test('isBlock', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      isBlock: true
    }, "Block Button"));
    expect(view).toMatchSnapshot();
  });
  test('isDisabled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      isDisabled: true
    }, "Disabled Button"));
    expect(view).toMatchSnapshot();
  });
  test('isFocus', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      isFocus: true
    }, "Focused Button"));
    expect(view).toMatchSnapshot();
  });
  test('isHover', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      isHover: true
    }, "Hovered Button"));
    expect(view).toMatchSnapshot();
  });
  test('isInline', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      variant: _Button.ButtonVariant.link,
      isInline: true
    }, "Hovered Button"));
    expect(view).toMatchSnapshot();
  });
  test('allows passing in a string as the component', function () {
    var component = 'a';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      component: component
    }));
    expect(view.type()).toBe(component);
  });
  test('allows passing in a React Component as the component', function () {
    var Component = function Component() {
      return null;
    };

    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      component: Component
    }));
    expect(view.type()).toBe(Component);
  });
  test('aria-disabled is set to true and tabIndex to -1 if component is not a button and is disabled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Button2["default"], {
      component: "a",
      isDisabled: true
    }, "Disabled Anchor Button"));
    expect(view).toMatchSnapshot();
  });
});