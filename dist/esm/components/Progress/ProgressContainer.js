var _variantToIcon;

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React, { Fragment } from 'react';
import progressStyle from "../../@patternfly/patternfly/components/Progress/progress.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { CheckCircleIcon, TimesCircleIcon } from '@patternfly/react-icons';
import ProgressBar from './ProgressBar';
export var ProgressMeasureLocation = {
  outside: 'outside',
  inside: 'inside',
  top: 'top',
  none: 'none'
};
export var ProgressVariant = {
  danger: 'danger',
  success: 'success',
  info: 'info'
};
var propTypes = {
  /** Properties needed for aria support */
  ariaProps: PropTypes.object.isRequired,

  /** Progress component DOM ID. */
  parentId: PropTypes.string.isRequired,

  /** Progress title. */
  title: PropTypes.string,

  /** Label to indicate what progress is showing. */
  label: PropTypes.node,

  /** Type of progress status. */
  variant: PropTypes.oneOf(Object.values(ProgressVariant)),

  /** Location of progress value. */
  measureLocation: PropTypes.oneOf(Object.values(ProgressMeasureLocation)),

  /** Actual progress value. */
  value: PropTypes.number.isRequired
};
var defaultProps = {
  variant: ProgressVariant.info,
  measureLocation: ProgressMeasureLocation.Top,
  title: ''
};
var variantToIcon = (_variantToIcon = {}, _defineProperty(_variantToIcon, ProgressVariant.danger, TimesCircleIcon), _defineProperty(_variantToIcon, ProgressVariant.success, CheckCircleIcon), _variantToIcon);

var ProgressContainer = function ProgressContainer(_ref) {
  var ariaProps = _ref.ariaProps,
      value = _ref.value,
      title = _ref.title,
      parentId = _ref.parentId,
      label = _ref.label,
      variant = _ref.variant,
      measureLocation = _ref.measureLocation;
  var StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
  return React.createElement(Fragment, null, React.createElement("div", {
    className: css(progressStyle.progressDescription),
    id: "".concat(parentId, "-description")
  }, title), React.createElement("div", {
    className: css(progressStyle.progressStatus)
  }, (measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && React.createElement("span", {
    className: css(progressStyle.progressMeasure)
  }, label || "".concat(value, "%")), variantToIcon.hasOwnProperty(variant) && React.createElement("span", {
    className: css(progressStyle.progressStatusIcon)
  }, React.createElement(StatusIcon, null))), React.createElement(ProgressBar, {
    ariaProps: ariaProps,
    value: value
  }, measureLocation === ProgressMeasureLocation.inside && "".concat(value, "%")));
};

ProgressContainer.propTypes = propTypes;
ProgressContainer.defaultProps = defaultProps;
export default ProgressContainer;