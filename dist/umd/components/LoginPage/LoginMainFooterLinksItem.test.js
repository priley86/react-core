"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "./LoginMainFooterLinksItem", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("./LoginMainFooterLinksItem"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.LoginMainFooterLinksItem, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _LoginMainFooterLinksItem, _enzyme) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _LoginMainFooterLinksItem2 = _interopRequireDefault(_LoginMainFooterLinksItem);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('renders with PatternFly Core styles', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooterLinksItem2["default"], {
      href: "#",
      target: ""
    }));
    expect(view).toMatchSnapshot();
  });
  test('className is added to the root element', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooterLinksItem2["default"], {
      className: "extra-class"
    }));
    expect(view.prop('className')).toMatchSnapshot();
  });
  test('extra props are spread to the root element', function () {
    var testId = 'login-body';
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooterLinksItem2["default"], {
      "data-testid": testId
    }));
    expect(view.prop('data-testid')).toBe(testId);
  });
  test('LoginFooterItem  with custom node', function () {
    var CustomNode = function CustomNode() {
      return _react2["default"].createElement("div", null, "My custom node");
    };

    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_LoginMainFooterLinksItem2["default"], null, _react2["default"].createElement(CustomNode, null)));
    expect(view).toMatchSnapshot();
  });
});