"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./DropdownToggle", "./KebabToggle"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./DropdownToggle"), require("./KebabToggle"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.DropdownToggle, global.KebabToggle);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _DropdownToggle, _KebabToggle) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _DropdownToggle2 = _interopRequireDefault(_DropdownToggle);

  var _KebabToggle2 = _interopRequireDefault(_KebabToggle);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Dropdown toggle', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_DropdownToggle2["default"], {
      id: "Dropdown Toggle"
    }, "Dropdown"));
    expect(view).toMatchSnapshot();
  });
  test('Kebab toggle', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_KebabToggle2["default"], {
      id: "Dropdown Toggle"
    }));
    expect(view).toMatchSnapshot();
  });
});