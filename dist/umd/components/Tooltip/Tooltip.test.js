"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./index", "@tippy.js/react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./index"), require("@tippy.js/react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.index, global.react);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _index, _react3) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _react4 = _interopRequireDefault(_react3);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('tooltip renders', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_index.Tooltip, {
      position: "top",
      content: _react2["default"].createElement("div", null, "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam id feugiat augue, nec fringilla turpis.")
    }, _react2["default"].createElement("div", null, "Toggle tooltip")));
    expect(view).toMatchSnapshot();
  });
  test('tooltip triggered by click', function () {
    var view = (0, _enzyme.shallow)(_react2["default"].createElement(_index.Tooltip, {
      position: "top",
      trigger: "click",
      content: _react2["default"].createElement("p", null, "my content")
    }, _react2["default"].createElement("div", null, "Toggle tooltip")));
    expect(view.find(_react4["default"]).prop('trigger')).toBe('click');
  });
});