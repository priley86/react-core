"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./ModalBoxHeader", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./ModalBoxHeader"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.ModalBoxHeader, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_ModalBoxHeader, _react, _enzyme) {
  "use strict";

  var _ModalBoxHeader2 = _interopRequireDefault(_ModalBoxHeader);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('ModalBoxHeader Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBoxHeader2["default"], null, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
});