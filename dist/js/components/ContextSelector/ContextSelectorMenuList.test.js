"use strict";

var _react = _interopRequireDefault(require("react"));

var _enzyme = require("enzyme");

var _ContextSelectorItem = _interopRequireDefault(require("./ContextSelectorItem"));

var _ContextSelectorMenuList = _interopRequireDefault(require("./ContextSelectorMenuList"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var items = [_react["default"].createElement(_ContextSelectorItem["default"], {
  key: "0"
}, "My Project"), _react["default"].createElement(_ContextSelectorItem["default"], {
  key: "1"
}, "OpenShift Cluster"), _react["default"].createElement(_ContextSelectorItem["default"], {
  key: "2"
}, "Production Ansible"), _react["default"].createElement(_ContextSelectorItem["default"], {
  key: "3"
}, "AWS"), _react["default"].createElement(_ContextSelectorItem["default"], {
  key: "4"
}, "Azure")];
test('Renders ContextSelectorMenuList open', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorMenuList["default"], {
    isOpen: true,
    openedOnEnter: false
  }, items));
  expect(view).toMatchSnapshot();
});
test('Renders ContextSelectorMenuList closed', function () {
  var view = (0, _enzyme.shallow)(_react["default"].createElement(_ContextSelectorMenuList["default"], {
    openedOnEnter: false
  }, items));
  expect(view).toMatchSnapshot();
});