"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModalBoxBrand"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModalBoxBrand"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModalBoxBrand);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _AboutModalBoxBrand) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _AboutModalBoxBrand2 = _interopRequireDefault(_AboutModalBoxBrand);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('test About Modal Brand', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBoxBrand2["default"], {
      src: "testimage..",
      alt: "brand"
    }));
    expect(view).toMatchSnapshot();
  });
});