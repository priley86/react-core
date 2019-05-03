"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DropdownToggleCheckbox"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DropdownToggleCheckbox"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DropdownToggleCheckbox);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _DropdownToggleCheckbox) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _DropdownToggleCheckbox2 = _interopRequireDefault(_DropdownToggleCheckbox);

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
    isChecked: false
  };
  test('controlled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownToggleCheckbox2["default"], {
      isChecked: true,
      id: "check",
      "aria-label": "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('uncontrolled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownToggleCheckbox2["default"], {
      id: "check",
      "aria-label": "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('isDisabled', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownToggleCheckbox2["default"], {
      id: "check",
      isDisabled: true,
      "aria-label": "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('passing class', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownToggleCheckbox2["default"], {
      label: "label",
      className: "class-123",
      id: "check",
      isChecked: true,
      "aria-label": "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('passing HTML attribute', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownToggleCheckbox2["default"], {
      label: "label",
      "aria-labelledby": "labelId",
      id: "check",
      isChecked: true,
      "aria-label": "check"
    }));
    expect(view).toMatchSnapshot();
  });
  test('checkbox passes value and event to onChange handler', function () {
    var newValue = true;
    var event = {
      currentTarget: {
        checked: newValue
      }
    };
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_DropdownToggleCheckbox2["default"], _extends({
      id: "check"
    }, props, {
      "aria-label": "check"
    })));
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
});