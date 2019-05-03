"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./AboutModalBoxHeader", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./AboutModalBoxHeader"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.AboutModalBoxHeader, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_AboutModalBoxHeader, _react, _enzyme) {
  "use strict";

  var _AboutModalBoxHeader2 = _interopRequireDefault(_AboutModalBoxHeader);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('AboutModalBoxHeader Test', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_AboutModalBoxHeader2["default"], {
      productName: "Product Name",
      id: "id"
    }, "This is a AboutModalBox header"));
    expect(view).toMatchSnapshot();
  });
});