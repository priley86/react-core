"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./AboutModalBoxContent", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./AboutModalBoxContent"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.AboutModalBoxContent, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_AboutModalBoxContent, _react, _enzyme) {
  "use strict";

  var _AboutModalBoxContent2 = _interopRequireDefault(_AboutModalBoxContent);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('AboutModalBoxContent Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBoxContent2["default"], {
      trademark: "trademark",
      id: "id"
    }, "This is a AboutModalBoxContent"));
    expect(view).toMatchSnapshot();
  });
});