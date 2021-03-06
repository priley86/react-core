function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/layouts/Split/split.css.js";
import { css } from '@patternfly/react-styles';
var propTypes = {
  /** Flag indicating if this Split Layout item should fill the available horizontal space. */
  isFilled: PropTypes.bool,

  /** content rendered inside the Split Layout Item */
  children: PropTypes.node,

  /** additional classes added to the Split Layout Item */
  className: PropTypes.string,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  isFilled: false,
  className: '',
  children: null
};

var SplitItem = function SplitItem(_ref) {
  var isFilled = _ref.isFilled,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["isFilled", "className", "children"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.splitItem, isFilled && styles.modifiers.fill, className)
  }), children);
};

SplitItem.propTypes = propTypes;
SplitItem.defaultProps = defaultProps;
export default SplitItem;