"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.KeyTypes = exports.SelectVariant = exports.SelectContext = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var SelectContext = _react["default"].createContext({
  onSelect: function onSelect() {},
  onClose: function onClose() {}
});

exports.SelectContext = SelectContext;
var SelectVariant = {
  single: 'single',
  checkbox: 'checkbox',
  typeahead: 'typeahead',
  typeaheadMulti: 'typeaheadmulti'
};
exports.SelectVariant = SelectVariant;
var KeyTypes = {
  Tab: 'Tab',
  Space: ' ',
  Escape: 'Escape',
  Enter: 'Enter',
  ArrowUp: 'ArrowUp',
  ArrowDown: 'ArrowDown'
};
exports.KeyTypes = KeyTypes;