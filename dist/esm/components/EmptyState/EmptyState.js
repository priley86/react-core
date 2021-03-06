function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/EmptyState/empty-state.css.js";
export var EmptyStateVariant = {
  large: 'large',
  small: 'small',
  full: 'full'
};
var maxWidthModifiers = {
  large: styles.modifiers.lg,
  small: styles.modifiers.sm,
  full: null
};

var EmptyState = function EmptyState(_ref) {
  var children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["children", "className", "variant"]);

  var maxWidthModifier = variant && maxWidthModifiers[variant];
  return React.createElement("div", _extends({
    className: css(styles.emptyState, maxWidthModifier && maxWidthModifier, className)
  }, props), children);
};

EmptyState.propTypes = {
  /** Additional classes added to the EmptyState */
  className: PropTypes.string,

  /** Content rendered inside the EmptyState */
  children: PropTypes.node.isRequired,

  /** Modifies EmptyState max-width */
  variant: PropTypes.oneOf(Object.keys(EmptyStateVariant)),

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
EmptyState.defaultProps = {
  className: '',
  variant: EmptyStateVariant.large
};
export default EmptyState;