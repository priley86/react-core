function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

import React from 'react';
import styles from "../../@patternfly/patternfly/components/Progress/progress.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var propTypes = {
  /** What should be rendered inside progress bar. */
  children: PropTypes.node,

  /** Additional classes for Progres bar. */
  className: PropTypes.string,

  /** Actual progress value. */
  value: PropTypes.number.isRequired,

  /** Minimal value of progress. */
  ariaProps: PropTypes.object.isRequired,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: ''
};

var ProgressBar = function ProgressBar(_ref) {
  var ariaProps = _ref.ariaProps,
      className = _ref.className,
      children = _ref.children,
      value = _ref.value,
      props = _objectWithoutProperties(_ref, ["ariaProps", "className", "children", "value"]);

  return React.createElement("div", _extends({}, props, {
    className: css(styles.progressBar, className)
  }, ariaProps), React.createElement("div", {
    className: css(styles.progressIndicator),
    style: {
      width: "".concat(value, "%")
    }
  }, React.createElement("span", {
    className: css(styles.progressMeasure)
  }, children)));
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
export default ProgressBar;