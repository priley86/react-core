"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./ModalBox", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./ModalBox"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.ModalBox, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_ModalBox, _react, _enzyme) {
  "use strict";

  var _ModalBox2 = _interopRequireDefault(_ModalBox);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('ModalBox Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBox2["default"], {
      titleId: "titleId",
      ariaDescribedById: "bodyId"
    }, "This is a ModalBox"));
    expect(view).toMatchSnapshot();
  });
  test('ModalBox Test isLarge', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBox2["default"], {
      titleId: "titleId",
      ariaDescribedById: "bodyId",
      isLarge: true
    }, "This is a ModalBox"));
    expect(view).toMatchSnapshot();
  });
  test('ModalBox Test isOpen', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_ModalBox2["default"], {
      titleId: "titleId",
      ariaDescribedById: "bodyId",
      isLarge: true,
      isOpen: true
    }, "This is a ModalBox"));
    expect(view).toMatchSnapshot();
  });
});