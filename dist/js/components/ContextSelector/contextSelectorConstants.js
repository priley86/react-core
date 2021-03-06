"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ContextSelectorContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var ContextSelectorContext = _react["default"].createContext({
  onSelect: function onSelect() {}
});

exports.ContextSelectorContext = ContextSelectorContext;