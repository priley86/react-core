"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Switch"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Switch"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Switch);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Switch) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Switch2 = _interopRequireDefault(_Switch);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  var props = {
    onChange: jest.fn(),
    checked: false
  };
  test('switch label for attribute equals input id attribute', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "foo"
    }));
    expect(view.find('input').prop('id')).toBe('foo');
    expect(view.find('label').prop('htmlFor')).toBe('foo');
  });
  test('switch label id is auto generated', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      "aria-label": "..."
    }));
    expect(view.find('input').prop('id')).toBeDefined();
  });
  test('switch is checked', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "switch-is-checked",
      label: "On",
      isChecked: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('switch is not checked', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "switch-is-not-checked",
      label: "Off",
      isChecked: false
    }));
    expect(view).toMatchSnapshot();
  });
  test('no label switch is checked', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "no-label-switch-is-checked",
      isChecked: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('no label switch is not checked', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "no-label-switch-is-not-checked",
      isChecked: false
    }));
    expect(view).toMatchSnapshot();
  });
  test('switch is checked and disabled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "switch-is-checked-and-disabled",
      isChecked: true,
      isDisabled: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('switch is not checked and disabled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], {
      id: "switch-is-not-checked-and-disabled",
      isChecked: false,
      isDisabled: true
    }));
    expect(view).toMatchSnapshot();
  });
  test('switch passes value and event to onChange handler', function () {
    var newValue = true;
    var event = {
      currentTarget: {
        checked: newValue
      }
    };
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Switch2["default"], _extends({
      id: "onChange-switch"
    }, props)));
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
});