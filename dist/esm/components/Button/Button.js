function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { componentShape } from '../../helpers/componentShape';
import styles from "../../@patternfly/patternfly/components/Button/button.css.js";
export var ButtonVariant = {
  primary: 'primary',
  secondary: 'secondary',
  tertiary: 'tertiary',
  danger: 'danger',
  link: 'link',
  plain: 'plain'
};
export var ButtonType = {
  button: 'button',
  submit: 'submit'
};
var propTypes = {
  /** content rendered inside the button */
  children: PropTypes.node,

  /** additional classes added to the button */
  className: PropTypes.string,

  /** Sets the base component to render. defaults to button */
  component: componentShape,

  /**  Adds active styling to button. */
  isActive: PropTypes.bool,

  /** Adds block styling to button */
  isBlock: PropTypes.bool,

  /** Disables the button and adds disabled styling */
  isDisabled: PropTypes.bool,

  /** Adds focus styling to the button */
  isFocus: PropTypes.bool,

  /** Adds hover styling to the button */
  isHover: PropTypes.bool,

  /** Adds inline styling to a link button */
  isInline: PropTypes.bool,

  /** Sets button type */
  type: PropTypes.oneOf(Object.values(ButtonType)),

  /** Adds button variant styles */
  variant: PropTypes.oneOf(Object.values(ButtonVariant)),

  /** Adds accessible text to the button. */
  'aria-label': PropTypes.string,

  /** Additional props are spread to the container <button> */
  '': PropTypes.any
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
  return React.createElement(Component, _extends({}, props, {
    "aria-disabled": isButtonElement ? null : isDisabled,
    className: css(styles.button, getModifier(styles.modifiers, variant), isBlock && styles.modifiers.block, isDisabled && styles.modifiers.disabled, isActive && styles.modifiers.active, isFocus && styles.modifiers.focus, isHover && styles.modifiers.hover, isInline && variant === ButtonVariant.link && styles.modifiers.inline, className),
    disabled: isButtonElement ? isDisabled : null,
    tabIndex: isDisabled && !isButtonElement ? -1 : null,
    type: isButtonElement ? type : null
  }), children);
};

Button.propTypes = propTypes;
Button.defaultProps = defaultProps;
export default Button;