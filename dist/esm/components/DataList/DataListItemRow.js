function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/DataList/data-list.css.js";

var DataListItemRow = function DataListItemRow(_ref) {
  var children = _ref.children,
      className = _ref.className,
      rowid = _ref.rowid,
      props = _objectWithoutProperties(_ref, ["children", "className", "rowid"]);

  return React.createElement("div", _extends({
    className: css(styles.dataListItemRow, className)
  }, props), React.Children.map(children, function (child) {
    return React.isValidElement(child) && React.cloneElement(child, {
      rowid: rowid
    });
  }));
};

DataListItemRow.propTypes = {
  /** Content rendered inside the DataList item Row.  Can be <DataListItemCells>, <DataListAction>, <DataListCheck> or <DataListToggle> */
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,

  /** Additional classes added to the DataList item Row */
  className: PropTypes.string,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
DataListItemRow.defaultProps = {
  className: ''
};
export default DataListItemRow;