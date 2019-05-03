"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _optionsMenuCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _util = require("../../helpers/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OptionsMenuToggle = function OptionsMenuToggle(_ref) {
  var parentId = _ref.parentId,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      isPlain = _ref.isPlain,
      isHovered = _ref.isHovered,
      isActive = _ref.isActive,
      isFocused = _ref.isFocused,
      hideCaret = _ref.hideCaret,
      ariaLabel = _ref["aria-label"],
      ToggleTemplate = _ref.toggleTemplate,
      toggleTemplateProps = _ref.toggleTemplateProps;
  var template = ToggleTemplate && typeof ToggleTemplate === 'string' ? (0, _util.fillTemplate)(ToggleTemplate, toggleTemplateProps) : _react["default"].createElement(ToggleTemplate, {
    toggleTemplateProps: toggleTemplateProps
  });
  return _react["default"].createElement("button", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggle, isPlain && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'plain'), isHovered && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'hover'), isActive && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'active'), isFocused && (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'focus')),
    id: "".concat(parentId, "-toggle"),
    "aria-haspopup": "listbox",
    "aria-label": ariaLabel,
    "aria-expanded": isOpen,
    onClick: onToggle
  }, ToggleTemplate && (!isPlain ? _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggleText)
  }, template) : _react["default"].createElement(_react["default"].Fragment, null, template)), !hideCaret && _react["default"].createElement(_reactIcons.CaretDownIcon, {
    "aria-hidden": true,
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggleIcon)
  }));
};

OptionsMenuToggle.propTypes = {
  /** Id of the parent Options menu component */
  parentId: _propTypes["default"].string,

  /** Callback for when this Options menu is toggled */
  onToggle: _propTypes["default"].func,

  /** Flag to indicate if menu is open */
  isOpen: _propTypes["default"].bool,

  /** Flag to indicate if the button is plain */
  isPlain: _propTypes["default"].bool,

  /** Forces display of the hover state of the Options menu */
  isHovered: _propTypes["default"].bool,

  /** Forces display of the active state of the Options menu */
  isActive: _propTypes["default"].bool,

  /** Forces display of the hover state of the Options menu */
  isFocused: _propTypes["default"].bool,

  /** Content to be rendered in the Options menu toggle button */
  toggleTemplate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func]),

  /** Props to be passed to the Options menu toggle button template */
  toggleTemplateProps: _propTypes["default"].object,

  /** hide the toggle caret */
  hideCaret: _propTypes["default"].bool,

  /** Provides an accessible name for the button when an icon is used instead of text*/
  "aria-label": _propTypes["default"].string
};
OptionsMenuToggle.defaultProps = {
  parentId: '',
  onToggle: Function.prototype,
  isOpen: false,
  isPlain: false,
  isHovered: false,
  isActive: false,
  isFocused: false,
  toggleTemplate: '',
  toggleTemplateProps: undefined,
  hideCaret: false,
  "aria-label": 'Options menu'
};
var _default = OptionsMenuToggle;
exports["default"] = _default;