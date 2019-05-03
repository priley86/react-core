"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./AboutModalBoxCloseButton"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./AboutModalBoxCloseButton"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.AboutModalBoxCloseButton);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _AboutModalBoxCloseButton) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _AboutModalBoxCloseButton2 = _interopRequireDefault(_AboutModalBoxCloseButton);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('AboutModalBoxCloseButton Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBoxCloseButton2["default"], null));
    expect(view).toMatchSnapshot();
  });
  test('AboutModalBoxCloseButton Test onclose', function () {
    var onClose = jest.fn();
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBoxCloseButton2["default"], {
      onclose: onClose
    }));
    expect(view).toMatchSnapshot();
  });
});