function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Page/page.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** Additional classes added to the page sidebar */
  className: PropTypes.string,

  /** Component to render the side navigation (e.g. <Nav /> */
  nav: PropTypes.node,

  /** Programmatically manage if the side nav is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
  isNavOpen: PropTypes.bool,

  /** Additional props are spread to the container <aside> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  nav: null,
  isNavOpen: true
};

var PageSidebar = function PageSidebar(_ref) {
  var className = _ref.className,
      nav = _ref.nav,
      isNavOpen = _ref.isNavOpen,
      props = _objectWithoutProperties(_ref, ["className", "nav", "isNavOpen"]);

  return React.createElement("div", _extends({
    id: "page-sidebar",
    className: css(styles.pageSidebar, isNavOpen && styles.modifiers.expanded, !isNavOpen && styles.modifiers.collapsed, className)
  }, props), React.createElement("div", {
    className: css(styles.pageSidebarBody)
  }, nav));
};

PageSidebar.propTypes = propTypes;
PageSidebar.defaultProps = defaultProps;
export default PageSidebar;