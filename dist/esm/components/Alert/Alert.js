function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/Alert/alert.css.js";
import accessibleStyles from "../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js";
import AlertIcon from './AlertIcon';
import { capitalize } from '../../helpers/util';
export var AlertVariant = {
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info'
};
var propTypes = {
  /** Adds Alert variant styles */
  variant: PropTypes.oneOf(Object.values(AlertVariant)).isRequired,

  /** Title of the Alert */
  title: PropTypes.node.isRequired,

  /** Action button to put in the Alert.  Should be <AlertActionLink> or <AlertActionCloseButton> */
  action: PropTypes.node,

  /** content rendered inside the Alert */
  children: PropTypes.node,

  /** additional classes added to the Alert */
  className: PropTypes.string,

  /** Adds accessible text to the Alert */
  'aria-label': PropTypes.string,

  /** Variant label text for screen readers */
  variantLabel: PropTypes.string,

  /** Additional props are spread to the container <div>  */
  '': PropTypes.any
};
var defaultProps = {
  'aria-label': undefined,
  action: null,
  children: '',
  className: '',
  variantLabel: null
};

var getDefaultAriaLabel = function getDefaultAriaLabel(variant) {
  return "".concat(capitalize(AlertVariant[variant]), " Alert");
};

var Alert = function Alert(_ref) {
  var variant = _ref.variant,
      variantLabel = _ref.variantLabel,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? getDefaultAriaLabel(variant) : _ref$ariaLabel,
      action = _ref.action,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["variant", "variantLabel", "aria-label", "action", "title", "children", "className"]);

  variantLabel = variantLabel || capitalize(AlertVariant[variant]);
  var readerTitle = React.createElement(React.Fragment, null, React.createElement("span", {
    className: css(accessibleStyles.screenReader)
  }, "".concat(variantLabel, " alert:")), title);
  var customClassName = css(styles.alert, getModifier(styles, variant, styles.modifiers.info), className);
  return React.createElement("div", _extends({}, props, {
    className: customClassName,
    "aria-label": ariaLabel
  }), React.createElement(AlertIcon, {
    variant: variant
  }), React.createElement("h4", {
    className: css(styles.alertTitle)
  }, readerTitle), children && React.createElement("div", {
    className: css(styles.alertDescription)
  }, React.createElement("p", null, children)), action && React.createElement("div", {
    className: css(styles.alertAction, className)
  }, React.cloneElement(action, {
    title: title,
    variantLabel: variantLabel
  })));
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
export default Alert;