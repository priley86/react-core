"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./ModalBoxBody", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./ModalBoxBody"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.ModalBoxBody, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_ModalBoxBody, _react, _enzyme) {
  "use strict";

  var _ModalBoxBody2 = _interopRequireDefault(_ModalBoxBody);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('ModalBoxBody Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBoxBody2["default"], {
      id: "id"
    }, "This is a ModalBox header"));
    expect(view).toMatchSnapshot();
  });
});