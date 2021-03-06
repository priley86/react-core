function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { CaretDownIcon } from '@patternfly/react-icons';
import PropTypes from 'prop-types';
import Toggle from './Toggle';
import styles from "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js";
import { css } from '@patternfly/react-styles';

var DropdownToggle = function DropdownToggle(_ref) {
  var children = _ref.children,
      IconComponent = _ref.iconComponent,
      splitButtonItems = _ref.splitButtonItems,
      props = _objectWithoutProperties(_ref, ["children", "iconComponent", "splitButtonItems"]);

  var toggle = React.createElement(Toggle, _extends({}, props, splitButtonItems && {
    isSplitButton: true,
    'aria-label': props['aria-label'] || 'Select'
  }), children && React.createElement("span", {
    className: IconComponent && css(styles.dropdownToggleText)
  }, children), IconComponent && React.createElement(IconComponent, {
    className: css(children && styles.dropdownToggleIcon)
  }));

  if (splitButtonItems) {
    return React.createElement("div", {
      className: css(styles.dropdownToggle, styles.modifiers.splitButton, props.isDisabled && styles.modifiers.disabled)
    }, splitButtonItems, toggle);
  }

  return toggle;
};

DropdownToggle.propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string,

  /** Anything which can be rendered as dropdown toggle button */
  children: PropTypes.node,

  /** Classes applied to root element of dropdown toggle button */
  className: PropTypes.string,

  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,

  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,

  /** Element which wraps toggle */
  parentRef: PropTypes.any,

  /** Forces focus state */
  isFocused: PropTypes.bool,

  /** Forces hover state */
  isHovered: PropTypes.bool,

  /** Forces active state */
  isActive: PropTypes.bool,

  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,

  /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
  iconComponent: PropTypes.func,

  /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
  splitButtonItems: PropTypes.arrayOf(PropTypes.node),

  /** Accessible label for the dropdown toggle button */
  'aria-label': PropTypes.any,

  /** Additional props are spread to the container component */
  '': PropTypes.any
};
DropdownToggle.defaultProps = {
  id: '',
  children: null,
  className: '',
  isOpen: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  onToggle: Function.prototype,
  iconComponent: CaretDownIcon
};
export default DropdownToggle;