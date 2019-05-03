"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _optionsMenuCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OptionsMenuToggleWithText = function OptionsMenuToggleWithText(_ref) {
  var parentId = _ref.parentId,
      toggleText = _ref.toggleText,
      toggleTextClassName = _ref.toggleTextClassName,
      toggleButtonContents = _ref.toggleButtonContents,
      toggleButtonContentsClassName = _ref.toggleButtonContentsClassName,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      isPlain = _ref.isPlain,
      isHovered = _ref.isHovered,
      isActive = _ref.isActive,
      isFocused = _ref.isFocused,
      ariaLabel = _ref["aria-label"];
  return _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggle, (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'text'), isPlain && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'plain'), isHovered && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'hover'), isActive && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'active'), isFocused && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'focus'))
  }, _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggleText, toggleTextClassName)
  }, toggleText), _react["default"].createElement("button", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggleButton, toggleButtonContentsClassName),
    id: "".concat(parentId, "-toggle"),
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-expanded": isOpen,
    onClick: onToggle
  }, toggleButtonContents));
};

OptionsMenuToggleWithText.propTypes = {
  /** Id of the parent Options menu component */
  parentId: _propTypes["default"].string,

  /** Content to be rendered inside the Options menu toggle as text or another non-interactive element*/
  toggleText: _propTypes["default"].node.isRequired,

  /** classes to be added to the Options menu toggle text*/
  toggleTextClassName: _propTypes["default"].string,

  /** Content to be rendered inside the Options menu toggle button */
  toggleButtonContents: _propTypes["default"].node.isRequired,

  /** Classes to be added to the Options menu toggle button */
  toggleButtonContentsClassName: _propTypes["default"].string,

  /** Callback for when this Options menu is toggled */
  onToggle: _propTypes["default"].func,

  /** Flag to indicate if menu is open */
  isOpen: _propTypes["default"].bool,

  /** Flag to indicate if the button is plain */
  isPlain: _propTypes["default"].bool,

  /** Forces display of the hover state of the Options menu button */
  isHovered: _propTypes["default"].bool,

  /** Forces display of the active state of the Options menu button */
  isActive: _propTypes["default"].bool,

  /** Forces display of the hover state of the Options menu button */
  isFocused: _propTypes["default"].bool,

  /** Provides an accessible name for the button when an icon is used instead of text */
  "aria-label": _propTypes["default"].string
};
OptionsMenuToggleWithText.defaultProps = {
  parentId: '',
  toggleTextClassName: '',
  toggleButtonContentsClassName: '',
  onToggle: Function.prototype,
  isOpen: false,
  isPlain: false,
  isHovered: false,
  isActive: false,
  isFocused: false,
  "aria-label": 'Options menu'
};
var _default = OptionsMenuToggleWithText;
exports["default"] = _default;