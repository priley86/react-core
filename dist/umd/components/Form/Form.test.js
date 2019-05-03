"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Form"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Form"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Form);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Form) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Form2 = _interopRequireDefault(_Form);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('Form component', function () {
    test('should render default form variant', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Form2["default"], null));
      expect(view).toMatchSnapshot();
    });
    test('should render horizontal form variant', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Form2["default"], {
        isHorizontal: true
      }));
      expect(view).toMatchSnapshot();
    });
  });
});