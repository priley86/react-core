"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactIcons = require("@patternfly/react-icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Toggle = _interopRequireDefault(require("./Toggle"));

var _dropdownCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var DropdownToggle = function DropdownToggle(_ref) {
  var children = _ref.children,
      IconComponent = _ref.iconComponent,
      splitButtonItems = _ref.splitButtonItems,
      props = _objectWithoutProperties(_ref, ["children", "iconComponent", "splitButtonItems"]);

  var toggle = _react["default"].createElement(_Toggle["default"], _extends({}, props, splitButtonItems && {
    isSplitButton: true,
    'aria-label': props['aria-label'] || 'Select'
  }), children && _react["default"].createElement("span", {
    className: IconComponent && (0, _reactStyles.css)(_dropdownCss["default"].dropdownToggleText)
  }, children), IconComponent && _react["default"].createElement(IconComponent, {
    className: (0, _reactStyles.css)(children && _dropdownCss["default"].dropdownToggleIcon)
  }));

  if (splitButtonItems) {
    return _react["default"].createElement("div", {
      className: (0, _reactStyles.css)(_dropdownCss["default"].dropdownToggle, _dropdownCss["default"].modifiers.splitButton, props.isDisabled && _dropdownCss["default"].modifiers.disabled)
    }, splitButtonItems, toggle);
  }

  return toggle;
};

DropdownToggle.propTypes = {
  /** HTML ID of dropdown toggle */
  id: _propTypes["default"].string,

  /** Anything which can be rendered as dropdown toggle button */
  children: _propTypes["default"].node,

  /** Classes applied to root element of dropdown toggle button */
  className: _propTypes["default"].string,

  /** Flag to indicate if menu is opened */
  isOpen: _propTypes["default"].bool,

  /** Callback called when toggle is clicked */
  onToggle: _propTypes["default"].func,

  /** Element which wraps toggle */
  parentRef: _propTypes["default"].any,

  /** Forces focus state */
  isFocused: _propTypes["default"].bool,

  /** Forces hover state */
  isHovered: _propTypes["default"].bool,

  /** Forces active state */
  isActive: _propTypes["default"].bool,

  /** Display the toggle with no border or background */
  isPlain: _propTypes["default"].bool,

  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: _propTypes["default"].func,

  /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
  splitButtonItems: _propTypes["default"].arrayOf(_propTypes["default"].node),

  /** Accessible label for the dropdown toggle button */
  'aria-label': _propTypes["default"].any,

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any
};
DropdownToggle.defaultProps = {
  id: '',
  children: null,
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype,
  iconComponent: _reactIcons.CaretDownIcon
};
var _default = DropdownToggle;
exports["default"] = _default;