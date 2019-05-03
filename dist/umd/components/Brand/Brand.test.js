"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Brand"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Brand"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Brand);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Brand) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Brand2 = _interopRequireDefault(_Brand);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('simple brand', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Brand2["default"], {
      alt: "brand"
    }));
    expect(view).toMatchSnapshot();
  });
});