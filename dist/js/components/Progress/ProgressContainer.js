"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ProgressVariant = exports.ProgressMeasureLocation = void 0;

var _react = _interopRequireWildcard(require("react"));

var _progressCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Progress/progress.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _ProgressBar = _interopRequireDefault(require("./ProgressBar"));

var _variantToIcon;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var ProgressMeasureLocation = {
  outside: 'outside',
  inside: 'inside',
  top: 'top',
  none: 'none'
};
exports.ProgressMeasureLocation = ProgressMeasureLocation;
var ProgressVariant = {
  danger: 'danger',
  success: 'success',
  info: 'info'
};
exports.ProgressVariant = ProgressVariant;
var propTypes = {
  /** Properties needed for aria support */
  ariaProps: _propTypes["default"].object.isRequired,

  /** Progress component DOM ID. */
  parentId: _propTypes["default"].string.isRequired,

  /** Progress title. */
  title: _propTypes["default"].string,

  /** Label to indicate what progress is showing. */
  label: _propTypes["default"].node,

  /** Type of progress status. */
  variant: _propTypes["default"].oneOf(Object.values(ProgressVariant)),

  /** Location of progress value. */
  measureLocation: _propTypes["default"].oneOf(Object.values(ProgressMeasureLocation)),

  /** Actual progress value. */
  value: _propTypes["default"].number.isRequired
};
var defaultProps = {
  variant: ProgressVariant.info,
  measureLocation: ProgressMeasureLocation.Top,
  title: ''
};
var variantToIcon = (_variantToIcon = {}, _defineProperty(_variantToIcon, ProgressVariant.danger, _reactIcons.TimesCircleIcon), _defineProperty(_variantToIcon, ProgressVariant.success, _reactIcons.CheckCircleIcon), _variantToIcon);

var ProgressContainer = function ProgressContainer(_ref) {
  var ariaProps = _ref.ariaProps,
      value = _ref.value,
      title = _ref.title,
      parentId = _ref.parentId,
      label = _ref.label,
      variant = _ref.variant,
      measureLocation = _ref.measureLocation;
  var StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
  return _react["default"].createElement(_react.Fragment, null, _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_progressCss["default"].progressDescription),
    id: "".concat(parentId, "-description")
  }, title), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_progressCss["default"].progressStatus)
  }, (measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_progressCss["default"].progressMeasure)
  }, label || "".concat(value, "%")), variantToIcon.hasOwnProperty(variant) && _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_progressCss["default"].progressStatusIcon)
  }, _react["default"].createElement(StatusIcon, null))), _react["default"].createElement(_ProgressBar["default"], {
    ariaProps: ariaProps,
    value: value
  }, measureLocation === ProgressMeasureLocation.inside && "".concat(value, "%")));
};

ProgressContainer.propTypes = propTypes;
ProgressContainer.defaultProps = defaultProps;
var _default = ProgressContainer;
exports["default"] = _default;