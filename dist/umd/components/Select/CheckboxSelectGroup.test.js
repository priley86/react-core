"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./CheckboxSelectGroup"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./CheckboxSelectGroup"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.CheckboxSelectGroup);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _CheckboxSelectGroup) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _CheckboxSelectGroup2 = _interopRequireDefault(_CheckboxSelectGroup);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  describe('checkbox select options', function () {
    test('renders with children successfully', function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_CheckboxSelectGroup2["default"], {
        label: "test"
      }, _react2["default"].createElement("div", null, "child")));
      expect(view).toMatchSnapshot();
    });
  });
});