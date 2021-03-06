function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Page/page.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
export var PageSectionVariants = {
  "default": 'default',
  light: 'light',
  dark: 'dark',
  darker: 'darker'
};
var propTypes = {
  /** Content rendered inside the section */
  children: PropTypes.node,

  /** Additional classes added to the section */
  className: PropTypes.string,

  /** Section background color variant */
  variant: PropTypes.oneOf(Object.values(PageSectionVariants)),

  /** Modifies a main page section to have no padding */
  noPadding: PropTypes.bool,

  /** Modifies a main page section to have no padding on mobile */
  noPaddingMobile: PropTypes.bool,

  /** Additional props are spread to the container <section> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  variant: 'default',
  noPadding: false,
  noPaddingMobile: false
};

var PageSection = function PageSection(_ref) {
  var _variantStyle;

  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      noPadding = _ref.noPadding,
      noPaddingMobile = _ref.noPaddingMobile,
      props = _objectWithoutProperties(_ref, ["className", "children", "variant", "noPadding", "noPaddingMobile"]);

  var variantStyle = (_variantStyle = {}, _defineProperty(_variantStyle, PageSectionVariants["default"], ''), _defineProperty(_variantStyle, PageSectionVariants.light, styles.modifiers.light), _defineProperty(_variantStyle, PageSectionVariants.dark, styles.modifiers.dark_200), _defineProperty(_variantStyle, PageSectionVariants.darker, styles.modifiers.dark_100), _variantStyle);
  return React.createElement("section", _extends({}, props, {
    className: css(styles.pageMainSection, noPadding && styles.modifiers.noPadding, noPaddingMobile && styles.modifiers.noPaddingMobile, variantStyle[variant], className)
  }), children);
};

PageSection.propTypes = propTypes;
PageSection.defaultProps = defaultProps;
export default PageSection;