"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./CardHeader", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./CardHeader"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.CardHeader, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _CardHeader, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _CardHeader2 = _interopRequireDefault(_CardHeader);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardHeader2["default"], null));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardHeader2["default"], {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', function () {
    var testId = 'card-header';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardHeader2["default"], {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('set size and level props', function () {
    var size = 'xl';
    var level = 'h6';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CardHeader2["default"], {
      size: size,
      headingLevel: level
    }));
    expect(view.prop('size')).toBe(size);
    expect(view.prop('headingLevel')).toBe(level);
  });
});