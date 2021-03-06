function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/DataList/data-list.css.js";

var DataListCheck = function DataListCheck(_ref) {
  var className = _ref.className,
      _onChange = _ref.onChange,
      isValid = _ref.isValid,
      isDisabled = _ref.isDisabled,
      isChecked = _ref.isChecked,
      checked = _ref.checked,
      props = _objectWithoutProperties(_ref, ["className", "onChange", "isValid", "isDisabled", "isChecked", "checked"]);

  return React.createElement("div", {
    className: css(styles.dataListItemControl, className)
  }, React.createElement("div", {
    className: css('pf-c-data-list__check')
  }, React.createElement("input", _extends({}, props, {
    type: "checkbox",
    onChange: function onChange(event) {
      return _onChange(event.currentTarget.checked, event);
    },
    "aria-invalid": !isValid,
    disabled: isDisabled,
    checked: isChecked || checked
  }))));
};

DataListCheck.propTypes = {
  /** Additional classes added to the DataList item checkbox */
  className: PropTypes.string,

  /** Flag to show if the DataList checkbox selection is valid or invalid */
  isValid: PropTypes.bool,

  /** Flag to show if the DataList checkbox is disabled */
  isDisabled: PropTypes.bool,

  /** Flag to show if the DataList checkbox is checked */
  isChecked: PropTypes.bool,

  /** A callback for when the DataList checkbox selection changes */
  onChange: PropTypes.func,

  /** Aria-labelledby of the DataList checkbox */
  'aria-labelledby': PropTypes.string.isRequired,

  /** Additional props are spread to the <input> */
  '': PropTypes.any
};
DataListCheck.defaultProps = {
  className: '',
  isValid: true,
  isDisabled: false,
  isChecked: null,
  onChange: function onChange() {
    return undefined;
  }
};
export default DataListCheck;