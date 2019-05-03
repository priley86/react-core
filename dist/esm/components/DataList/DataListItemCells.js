function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/DataList/data-list.css.js";

var DataListItemCells = function DataListItemCells(_ref) {
  var className = _ref.className,
      dataListCells = _ref.dataListCells,
      rowid = _ref.rowid,
      props = _objectWithoutProperties(_ref, ["className", "dataListCells", "rowid"]);

  return React.createElement("div", _extends({
    className: css(styles.dataListItemContent, className)
  }, props), dataListCells);
};

DataListItemCells.propTypes = {
  /** Additional classes added to the DataList item Content Wrapper.  Children should be one ore more <DataListCell> nodes */
  className: PropTypes.string,

  /** Array of <DataListCell> nodes that are rendered one after the other. */
  dataListCells: PropTypes.arrayOf(PropTypes.node).isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
DataListItemCells.defaultProps = {
  className: ''
};
export default DataListItemCells;