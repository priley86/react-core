"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OptionsMenuItemsGroup = function OptionsMenuItemsGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      ariaLabel = _ref.ariaLabel;
  return _react["default"].createElement("li", null, _react["default"].createElement("ul", {
    className: className,
    "aria-label": ariaLabel
  }, children));
};

OptionsMenuItemsGroup.propTypes = {
  /** Content to be rendered in the Options menu items component */
  children: _propTypes["default"].node,

  /** Classes applied to root element of the Options menu items group */
  className: _propTypes["default"].string,

  /** Provides an accessible name for the Options menu items group */
  ariaLabel: _propTypes["default"].string
};
OptionsMenuItemsGroup.defaultValues = {
  children: null,
  className: '',
  ariaLabel: ''
};
var _default = OptionsMenuItemsGroup;
exports["default"] = _default;