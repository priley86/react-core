"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["react", "enzyme", "./Toolbar", "./ToolbarGroup", "./ToolbarItem", "./ToolbarSection"], factory);
  } else if (typeof exports !== "undefined") {
    factory(require("react"), require("enzyme"), require("./Toolbar"), require("./ToolbarGroup"), require("./ToolbarItem"), require("./ToolbarSection"));
  } else {
    var mod = {
      exports: {}
    };
    factory(global.react, global.enzyme, global.Toolbar, global.ToolbarGroup, global.ToolbarItem, global.ToolbarSection);
    global.undefined = mod.exports;
  }
})(void 0, function (_react, _enzyme, _Toolbar, _ToolbarGroup, _ToolbarItem, _ToolbarSection) {
  "use strict";

  var _react2 = _interopRequireDefault(_react);

  var _Toolbar2 = _interopRequireDefault(_Toolbar);

  var _ToolbarGroup2 = _interopRequireDefault(_ToolbarGroup);

  var _ToolbarItem2 = _interopRequireDefault(_ToolbarItem);

  var _ToolbarSection2 = _interopRequireDefault(_ToolbarSection);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  test('Simple toolbar with single group', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Toolbar2["default"], null, _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 1"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 2"))));
    expect(view).toMatchSnapshot();
  });
  test('Toolbar with multiple groups', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Toolbar2["default"], null, _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 1"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 2")), _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 3")), _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 4"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 5"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 6"))));
    expect(view).toMatchSnapshot();
  });
  test('Toolbar with sections', function () {
    var view = (0, _enzyme.mount)(_react2["default"].createElement(_Toolbar2["default"], null, _react2["default"].createElement(_ToolbarSection2["default"], {
      "aria-label": "First section"
    }, _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 1"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 2")), _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 3"))), _react2["default"].createElement(_ToolbarSection2["default"], {
      "aria-label": "Second section"
    }, _react2["default"].createElement(_ToolbarGroup2["default"], null, _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 4"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 5"), _react2["default"].createElement(_ToolbarItem2["default"], null, "Item 6")))));
    expect(view).toMatchSnapshot();
  });
});