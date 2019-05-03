"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _index) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('popover renders close-button, header and body', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_index.Popover, {
      position: "top",
      isVisible: true,
      hideOnOutsideClick: true,
      headerContent: _react2["default"].createElement("div", null, "Popover Header"),
      bodyContent: _react2["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
    }, _react2["default"].createElement("div", null, "Toggle Popover")));
    expect(view).toMatchSnapshot();
  });
});