"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./CardBody", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./CardBody"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.CardBody, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _CardBody, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _CardBody2 = _interopRequireDefault(_CardBody);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardBody2["default"], null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardBody2["default"], {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', function () {
    var testId = 'card-body';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardBody2["default"], {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('allows passing in a string as the component', function () {
    var component = 'section';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardBody2["default"], {
      component: component
    }));
    expect(view.type()).toBe(component);
  });
  test('allows passing in a React Component as the component', function () {
    var Component = function Component() {
      return null;
    };

    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardBody2["default"], {
      component: Component
    }));
    expect(view.type()).toBe(Component);
  });
  test('body with no-fill applied ', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardBody2["default"], {
      isFilled: false
    }));
    expect(view).toMatchSnapshot();
  });
});