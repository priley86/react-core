"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ButtonType = exports.ButtonVariant = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentShape = require("../../helpers/componentShape");

var _buttonCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Button/button.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  link: 'link',
  plain: 'plain'
};
exports.ButtonVariant = ButtonVariant;
var ButtonType = {
  button: 'button',
  submit: 'submit'
};
exports.ButtonType = ButtonType;
var propTypes = {
  /** content rendered inside the button */
  children: _propTypes["default"].node,

  /** additional classes added to the button */
  className: _propTypes["default"].string,

  /** Sets the base component to render. defaults to button */
  component: _componentShape.componentShape,

  /**  Adds active styling to button. */
  isActive: _propTypes["default"].bool,

  /** Adds block styling to button */
  isBlock: _propTypes["default"].bool,

  /** Disables the button and adds disabled styling */
  isDisabled: _propTypes["default"].bool,

  /** Adds focus styling to the button */
  isFocus: _propTypes["default"].bool,

  /** Adds hover styling to the button */
  isHover: _propTypes["default"].bool,

  /** Adds inline styling to a link button */
  isInline: _propTypes["default"].bool,

  /** Sets button type */
  type: _propTypes["default"].oneOf(Object.values(ButtonType)),

  /** Adds button variant styles */
  variant: _propTypes["default"].oneOf(Object.values(ButtonVariant)),

  /** Adds accessible text to the button. */
  'aria-label': _propTypes["default"].string,

  /** Additional props are spread to the container <button> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: '',
  className: '',
  component: 'button',
  isActive: false,
  isBlock: false,
  isDisabled: false,
  isFocus: false,
  isHover: false,
  isInline: false,
  type: ButtonType.button,
  variant: ButtonVariant.primary,
  'aria-label': null
};

var Button = function Button(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.component,
      isActive = _ref.isActive,
      isBlock = _ref.isBlock,
      isDisabled = _ref.isDisabled,
      isFocus = _ref.isFocus,
      isHover = _ref.isHover,
      isInline = _ref.isInline,
      variant = _ref.variant,
      type = _ref.type,
      props = _objectWithoutProperties(_ref, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isFocus", "isHover", "isInline", "variant", "type"]);

  var isButtonElement = Component === 'button';
  return _react["default"].createElement(Component, _extends({}, props, {
    "aria-disabled": isButtonElement ? null : isDisabled,
    className: (0, _reactStyles.css)(_buttonCss["default"].button, (0, _reactStyles.getModifier)(_buttonCss["default"].modifiers, variant), isBlock && _buttonCss["default"].modifiers.block, isDisabled && _buttonCss["default"].modifiers.disabled, isActive && _buttonCss["default"].modifiers.active, isFocus && _buttonCss["default"].modifiers.focus, isHover && _buttonCss["default"].modifiers.hover, isInline && variant === ButtonVariant.link && _buttonCss["default"].modifiers.inline, className),
    disabled: isButtonElement ? isDisabled : null,
    tabIndex: isDisabled && !isButtonElement ? -1 : null,
    type: isButtonElement ? type : null
  }), children);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
var _default = Button;
exports["default"] = _default;