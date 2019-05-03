"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModalBoxHero"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModalBoxHero"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModalBoxHero);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _AboutModalBoxHero) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _AboutModalBoxHero2 = _interopRequireDefault(_AboutModalBoxHero);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('test About Modal Box SHero', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBoxHero2["default"], null));
    expect(view).toMatchSnapshot();
  });
});