"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _progressCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Progress/progress.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** What should be rendered inside progress bar. */
  children: _propTypes["default"].node,

  /** Additional classes for Progres bar. */
  className: _propTypes["default"].string,

  /** Actual progress value. */
  value: _propTypes["default"].number.isRequired,

  /** Minimal value of progress. */
  ariaProps: _propTypes["default"].object.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
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

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_progressCss["default"].progressBar, className)
  }, ariaProps), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_progressCss["default"].progressIndicator),
    style: {
      width: "".concat(value, "%")
    }
  }, _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_progressCss["default"].progressMeasure)
  }, children)));
};

ProgressBar.propTypes = propTypes;
ProgressBar.defaultProps = defaultProps;
var _default = ProgressBar;
exports["default"] = _default;