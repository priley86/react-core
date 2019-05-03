function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/DataList/data-list.css.js";

var DataListCell = function DataListCell(_ref) {
  var children = _ref.children,
      className = _ref.className,
      width = _ref.width,
      isFilled = _ref.isFilled,
      alignRight = _ref.alignRight,
      isIcon = _ref.isIcon,
      props = _objectWithoutProperties(_ref, ["children", "className", "width", "isFilled", "alignRight", "isIcon"]);

  return React.createElement("div", _extends({
    className: css(styles.dataListCell, width > 1 && getModifier(styles, "flex_".concat(width), ''), !isFilled && styles.modifiers.noFill, alignRight && styles.modifiers.alignRight, isIcon && styles.modifiers.icon, className)
  }, props), children);
};

DataListCell.propTypes = {
  /** Content rendered inside the DataList cell */
  children: PropTypes.node,

  /** Additional classes added to the DataList cell */
  className: PropTypes.string,

  /** Width (from 1-5) to the DataList cell */
  width: PropTypes.oneOf([1, 2, 3, 4, 5]),

  /** Enables the body Content to fill the height of the card */
  isFilled: PropTypes.bool,

  /**  Aligns the cell content to the right of its parent. */
  alignRight: PropTypes.bool,

  /** Set to true if the cell content is an Icon */
  isIcon: PropTypes.bool,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
DataListCell.defaultProps = {
  children: null,
  className: '',
  width: 1,
  isFilled: true,
  alignRight: false,
  isIcon: false
};
export default DataListCell;