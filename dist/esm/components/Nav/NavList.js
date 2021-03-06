function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { NavVariants } from './NavVariants';
import styles from "../../@patternfly/patternfly/components/Nav/nav.css.js";
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** Indicates the list type. */
  variant: PropTypes.oneOf(Object.values(NavVariants)),

  /** Children nodes */
  children: PropTypes.node,

  /** Additional classes added to the list */
  className: PropTypes.string,

  /** Additional props are spread to the container <ul> */
  '': PropTypes.any
};
var defaultProps = {
  variant: 'default',
  children: null,
  className: ''
};

var NavList = function NavList(_ref) {
  var _variantStyle;

  var variant = _ref.variant,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["variant", "children", "className"]);

  var variantStyle = (_variantStyle = {}, _defineProperty(_variantStyle, NavVariants["default"], styles.navList), _defineProperty(_variantStyle, NavVariants.simple, styles.navSimpleList), _defineProperty(_variantStyle, NavVariants.horizontal, styles.navHorizontalList), _defineProperty(_variantStyle, NavVariants.tertiary, styles.navTertiaryList), _variantStyle);
  return React.createElement("ul", _extends({
    className: css(variantStyle[variant], className)
  }, props), children);
};

NavList.propTypes = propTypes;
NavList.defaultProps = defaultProps;
NavList.componentType = 'NavList';
export default NavList;