import _pt from "prop-types";

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import * as React from 'react';
import styles from "../../@patternfly/patternfly/components/Expandable/expandable.css.js";
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
var defaultProps = {
  className: '',
  isExpanded: false,
  toggleText: '',
  onToggle: function onToggle() {},
  isFocused: false,
  isHovered: false,
  isActive: false
};
export var Expandable = function Expandable(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isExpanded = _ref.isExpanded,
      toggleText = _ref.toggleText,
      onToggle = _ref.onToggle,
      isFocused = _ref.isFocused,
      isActive = _ref.isActive,
      isHovered = _ref.isHovered,
      props = _objectWithoutProperties(_ref, ["className", "children", "isExpanded", "toggleText", "onToggle", "isFocused", "isActive", "isHovered"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.expandable, isExpanded && styles.modifiers.expanded, className)
  }), React.createElement("button", {
    className: css(styles.expandableToggle, isFocused && styles.modifiers.focus, isHovered && styles.modifiers.hover, isActive && styles.modifiers.active),
    "aria-expanded": isExpanded,
    onClick: onToggle
  }, React.createElement(AngleRightIcon, {
    className: css(styles.expandableToggleIcon),
    "aria-hidden": true
  }), React.createElement("span", null, toggleText)), React.createElement("div", {
    className: css(styles.expandableContent),
    hidden: !isExpanded
  }, children));
};
Expandable.propTypes = {
  children: _pt.any.isRequired,
  className: _pt.string,
  isExpanded: _pt.bool,
  toggleText: _pt.string,
  isFocused: _pt.bool,
  isHovered: _pt.bool,
  isActive: _pt.bool
};
Expandable.defaultProps = defaultProps;
export default Expandable;