"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./TextInput"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./TextInput"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.TextInput);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _TextInput) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _TextInput2 = _interopRequireDefault(_TextInput);

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
    value: 'test input'
  };
  test('input passes value and event to onChange handler', function () {
    var newValue = 'new test input';
    var event = {
      currentTarget: {
        value: newValue
      }
    };
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], _extends({}, props, {
      "aria-label": "test input"
    })));
    view.find('input').simulate('change', event);
    expect(props.onChange).toBeCalledWith(newValue, event);
  });
  test('simple text input', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], _extends({}, props, {
      "aria-label": "simple text input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('disabled text input', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], {
      isDisabled: true,
      "aria-label": "disabled text input"
    }));
    expect(view).toMatchSnapshot();
  });
  test('readonly text input', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], {
      isReadOnly: true,
      value: "read only",
      "aria-label": "readonly text input"
    }));
    expect(view).toMatchSnapshot();
  });
  test('invalid text input', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], _extends({}, props, {
      required: true,
      isValid: false,
      "aria-label": "invalid text input"
    })));
    expect(view).toMatchSnapshot();
  });
  test('should throw console error when no aria-label, id or aria-labelledby is given', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], props));
    expect(myMock).toBeCalled();
  });
  test('should not throw console error when id is given but no aria-label or aria-labelledby', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], _extends({}, props, {
      id: "5"
    })));
    expect(myMock).not.toBeCalled();
  });
  test('should not throw console error when aria-label is given but no id or aria-labelledby', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], _extends({}, props, {
      "aria-label": "test input"
    })));
    expect(myMock).not.toBeCalled();
  });
  test('should not throw console error when aria-labelledby is given but no id or aria-label', function () {
    var myMock = jest.fn();
    global.console = {
      error: myMock
    };
    (0, _enzyme.shallow)(_react2["default"].createElement(_TextInput2["default"], _extends({}, props, {
      "aria-labelledby": "test input"
    })));
    expect(myMock).not.toBeCalled();
  });
});