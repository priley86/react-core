"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.DropdownArrowContext = exports.DropdownContext = exports.DropdownDirection = exports.DropdownPosition = void 0;

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var DropdownPosition = {
  right: 'right',
  left: 'left'
};
exports.DropdownPosition = DropdownPosition;
var DropdownDirection = {
  up: 'up',
  down: 'down'
};
exports.DropdownDirection = DropdownDirection;

var DropdownContext = _react["default"].createContext({
  onSelect: function onSelect() {}
});

exports.DropdownContext = DropdownContext;

var DropdownArrowContext = _react["default"].createContext({
  keyHandler: null,
  sendRef: null
});

exports.DropdownArrowContext = DropdownArrowContext;