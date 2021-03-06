"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _Toggle = _interopRequireDefault(require("./Toggle"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

var defaultAriaLabel = 'Actions';

var Kebab = function Kebab(_ref) {
  var props = _extends({}, _ref);

  return _react["default"].createElement(_Toggle["default"], props, _react["default"].createElement(_reactIcons.EllipsisVIcon, null));
};

Kebab.propTypes = {
  /** HTML ID of dropdown toggle */
  id: _propTypes["default"].string,

  /** Anything which can be rendered as dropdown toggle */
  children: _propTypes["default"].node,

  /** Classess applied to root element of dropdown toggle */
  className: _propTypes["default"].string,

  /** Flag to indicate if menu is opened */
  isOpen: _propTypes["default"].bool,

  /** Label Toggle button */
  'aria-label': _propTypes["default"].string,

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

  /** Disables the dropdown toggle */
  isDisabled: _propTypes["default"].bool,

  /** Display the toggle with no border or background */
  isPlain: _propTypes["default"].bool,

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any
};
Kebab.defaultProps = {
  id: '',
  children: null,
  className: '',
  isOpen: false,
  'aria-label': defaultAriaLabel,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  isDisabled: false,
  onToggle: Function.prototype
};
var _default = Kebab;
exports["default"] = _default;