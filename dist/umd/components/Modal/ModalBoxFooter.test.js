"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ModalBoxFooter"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ModalBoxFooter"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ModalBoxFooter);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ModalBoxFooter) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ModalBoxFooter2 = _interopRequireDefault(_ModalBoxFooter);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('ModalBoxFooter Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBoxFooter2["default"], null, "This is a ModalBox Footer"));
    expect(view).toMatchSnapshot();
  });
});