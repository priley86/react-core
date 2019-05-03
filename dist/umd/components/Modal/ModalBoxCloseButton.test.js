"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./ModalBoxCloseButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./ModalBoxCloseButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.ModalBoxCloseButton);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _ModalBoxCloseButton) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _ModalBoxCloseButton2 = _interopRequireDefault(_ModalBoxCloseButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('ModalBoxCloseButton Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBoxCloseButton2["default"], null));
    expect(view).toMatchSnapshot();
  });
});