function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Nav/nav.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { NavContext } from './Nav';
var propTypes = {
  /** Content rendered inside the nav item */
  children: PropTypes.node,

  /** Additional classes added to the nav item */
  className: PropTypes.string,

  /** Target navigation link */
  to: PropTypes.string,

  /** Flag indicating whether the item is active */
  isActive: PropTypes.bool,

  /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  groupId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
  itemId: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
  preventDefault: PropTypes.bool,

  /** Callback for item click */
  onClick: PropTypes.func,

  /** Additional props are spread to the container <a> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  to: '',
  isActive: false,
  groupId: null,
  itemId: null,
  preventDefault: false,
  onClick: null
};

var NavItem = function NavItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      to = _ref.to,
      isActive = _ref.isActive,
      groupId = _ref.groupId,
      itemId = _ref.itemId,
      preventDefault = _ref.preventDefault,
      _onClick = _ref.onClick,
      rest = _objectWithoutProperties(_ref, ["className", "children", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick"]);

  var defaultLink = React.createElement(NavContext.Consumer, null, function (context) {
    return React.createElement("a", _extends({
      href: to,
      onClick: function onClick(e) {
        return context.onSelect(e, groupId, itemId, to, preventDefault, _onClick);
      },
      className: css(styles.navLink, isActive && styles.modifiers.current, className),
      "aria-current": isActive ? 'page' : null
    }, rest), children);
  });
  var reactElement = React.isValidElement(children);
  var clonedChild = React.createElement(NavContext.Consumer, null, function (context) {
    return React.cloneElement(children, {
      onClick: function onClick(e) {
        return context.onSelect(e, groupId, itemId, to, preventDefault, _onClick);
      },
      className: css(styles.navLink, isActive && styles.modifiers.current, className),
      'aria-current': isActive ? 'page' : null
    });
  });
  return React.createElement("li", {
    className: css(styles.navItem, className)
  }, reactElement ? clonedChild : defaultLink);
};

NavItem.propTypes = propTypes;
NavItem.defaultProps = defaultProps;
NavItem.componentType = 'NavItem';
export default NavItem;