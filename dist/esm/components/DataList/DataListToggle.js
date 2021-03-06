function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import PropTypes from 'prop-types';
import { css } from '@patternfly/react-styles';
import { AngleRightIcon } from '@patternfly/react-icons';
import styles from "../../@patternfly/patternfly/components/DataList/data-list.css.js";
import { Button, ButtonVariant } from '../Button';

var DataListToggle = function DataListToggle(_ref) {
  var className = _ref.className,
      isExpanded = _ref.isExpanded,
      ariaControls = _ref['aria-controls'],
      ariaLabel = _ref['aria-label'],
      ariaLabelledBy = _ref['aria-labelledby'],
      rowid = _ref.rowid,
      id = _ref.id,
      props = _objectWithoutProperties(_ref, ["className", "isExpanded", "aria-controls", "aria-label", "aria-labelledby", "rowid", "id"]);

  return React.createElement("div", _extends({
    className: css(styles.dataListItemControl, className)
  }, props), React.createElement("div", {
    className: css(styles.dataListToggle)
  }, React.createElement(Button, {
    id: id,
    variant: ButtonVariant.plain,
    "aria-controls": ariaControls !== '' && ariaControls,
    "aria-label": ariaLabel,
    "aria-labelledby": ariaLabel !== 'Details' ? null : "".concat(rowid, " ").concat(id),
    "aria-expanded": isExpanded
  }, React.createElement(AngleRightIcon, null))));
};

DataListToggle.propTypes = {
  /** Additional classes added to the DataList cell */
  className: PropTypes.string,

  /** Flag to show if the expanded content of the DataList item is visible */
  isExpanded: PropTypes.bool,

  /** Identify the DataList toggle number */
  id: PropTypes.string.isRequired,

  /** Adds accessible text to the DataList toggle */
  'aria-labelledby': PropTypes.string,

  /** Adds accessible text to the DataList toggle */
  'aria-label': PropTypes.string,

  /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
  'aria-controls': PropTypes.string,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
DataListToggle.defaultProps = {
  'aria-controls': '',
  'aria-label': 'Details',
  'aria-labelledby': '',
  className: '',
  isExpanded: false
};
export default DataListToggle;