"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./AboutModalBox", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./AboutModalBox"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.AboutModalBox, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_AboutModalBox, _react, _enzyme) {
  "use strict";

  var _AboutModalBox2 = _interopRequireDefault(_AboutModalBox);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('AboutModalBox Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBox2["default"], {
      "aria-labelledby": "id",
      "aria-describedby": "id2"
    }, "This is a AboutModalBox"));
    expect(view).toMatchSnapshot();
  });
});