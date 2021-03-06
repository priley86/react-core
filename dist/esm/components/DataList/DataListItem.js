function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/DataList/data-list.css.js";

var DataListItem = function DataListItem(_ref) {
  var children = _ref.children,
      className = _ref.className,
      isExpanded = _ref.isExpanded,
      ariaLabelledBy = _ref['aria-labelledby'],
      props = _objectWithoutProperties(_ref, ["children", "className", "isExpanded", "aria-labelledby"]);

  return React.createElement("li", _extends({
    className: css(styles.dataListItem, isExpanded && styles.modifiers.expanded, className),
    "aria-labelledby": ariaLabelledBy
  }, props), React.Children.map(children, function (child) {
    return React.isValidElement(child) && React.cloneElement(child, {
      rowid: ariaLabelledBy
    });
  }));
};

DataListItem.propTypes = {
  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,

  /** Content rendered inside the DataList item */
  children: PropTypes.node.isRequired,

  /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
  className: PropTypes.string,

  /** Adds accessible text to the DataList item */
  'aria-labelledby': PropTypes.string.isRequired,

  /** Additional props are spread to the container <li> */
  '': PropTypes.any
};
DataListItem.defaultProps = {
  isExpanded: false,
  className: ''
};
export default DataListItem;