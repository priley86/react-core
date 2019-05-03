"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ActionGroup", "./Form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ActionGroup"), require("./Form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ActionGroup, global.Form);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ActionGroup, _Form) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ActionGroup2 = _interopRequireDefault(_ActionGroup);

  var _Form2 = _interopRequireDefault(_Form);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('ActionGroup component', function () {
    test('should render default action group variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_ActionGroup2["default"], null, _react2["default"].createElement("div", null, "Hello")));
      expect(view).toMatchSnapshot();
    });
    test('should render horizontal form ActionGroup variant', function () {
      var view = (0, _enzyme.mount)(_react2["default"].createElement(_Form2["default"], {
        isHorizontal: true
      }, _react2["default"].createElement(_ActionGroup2["default"], null)));
      expect(view).toMatchSnapshot();
    });
  });
});