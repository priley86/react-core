function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Select/select.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** Checkboxes within group */
  children: PropTypes.node,

  /** Additional classes added to the CheckboxSelectGroup control */
  className: PropTypes.string,

  /** Group label */
  label: PropTypes.string,

  /** Additional props are spread to the container <select> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  label: ''
};

var CheckboxSelectGroup = function CheckboxSelectGroup(_ref) {
  var children = _ref.children,
      className = _ref.className,
      label = _ref.label,
      titleId = _ref.titleId,
      props = _objectWithoutProperties(_ref, ["children", "className", "label", "titleId"]);

  return React.createElement(React.Fragment, null, React.createElement("div", _extends({}, props, {
    className: css(styles.selectMenuGroup, className)
  }), React.createElement("div", {
    className: css(styles.selectMenuGroupTitle),
    id: titleId || '',
    "aria-hidden": true
  }, label), children));
};

CheckboxSelectGroup.propTypes = propTypes;
CheckboxSelectGroup.defaultProps = defaultProps;
export default CheckboxSelectGroup;