"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["./Badge", "react", "enzyme"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("./Badge"), require("react"), require("enzyme"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.Badge, global.react, global.enzyme);
    global.undefined = mod.exports;
  }
})(void 0, function (_Badge, _react, _enzyme) {
  "use strict";

  var _Badge2 = _interopRequireDefault(_Badge);

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  Object.values([true, false]).forEach(function (isRead) {
    test("".concat(isRead, " Badge"), function () {
      var view = (0, _enzyme.shallow)(_react2["default"].createElement(_Badge2["default"], {
        isRead: isRead
      }, isRead ? 'read' : 'unread', " Badge"));
      expect(view).toMatchSnapshot();
    });
  });
});