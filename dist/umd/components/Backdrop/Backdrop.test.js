"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Backdrop"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Backdrop"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Backdrop);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Backdrop) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Backdrop2 = _interopRequireDefault(_Backdrop);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Backdrop Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Backdrop2["default"], null, "Backdrop"));
    expect(view).toMatchSnapshot();
  });
});