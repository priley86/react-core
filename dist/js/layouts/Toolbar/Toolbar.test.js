"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _Toolbar = _interopRequireDefault(require("./Toolbar"));

var _ToolbarGroup = _interopRequireDefault(require("./ToolbarGroup"));

var _ToolbarItem = _interopRequireDefault(require("./ToolbarItem"));

var _ToolbarSection = _interopRequireDefault(require("./ToolbarSection"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

test('Simple toolbar with single group', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Toolbar["default"], null, _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 1"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 2"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with multiple groups', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Toolbar["default"], null, _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 1"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 2")), _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 3")), _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 4"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 5"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 6"))));
  expect(view).toMatchSnapshot();
});
test('Toolbar with sections', function () {
  var view = (0, _enzyme.mount)(_react["default"].createElement(_Toolbar["default"], null, _react["default"].createElement(_ToolbarSection["default"], {
    "aria-label": "First section"
  }, _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 1"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 2")), _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 3"))), _react["default"].createElement(_ToolbarSection["default"], {
    "aria-label": "Second section"
  }, _react["default"].createElement(_ToolbarGroup["default"], null, _react["default"].createElement(_ToolbarItem["default"], null, "Item 4"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 5"), _react["default"].createElement(_ToolbarItem["default"], null, "Item 6")))));
  expect(view).toMatchSnapshot();
});