"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.variantIcons = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _alertCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Alert/alert.css.js"));

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var variantIcons = {
  success: _reactIcons.CheckCircleIcon,
  danger: _reactIcons.ExclamationCircleIcon,
  warning: _reactIcons.ExclamationTriangleIcon,
  info: _reactIcons.InfoCircleIcon
};
exports.variantIcons = variantIcons;
var propTypes = {
  variant: _propTypes["default"].oneOf(Object.keys(variantIcons)).isRequired,
  className: _propTypes["default"].string
};
var defaultProps = {
  className: ''
};

var AlertIcon = function AlertIcon(_ref) {
  var variant = _ref.variant,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["variant", "className"]);

  var Icon = variantIcons[variant];
  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_alertCss["default"].alertIcon, className)
  }), _react["default"].createElement(Icon, null));
};

AlertIcon.propTypes = propTypes;
AlertIcon.defaultProps = defaultProps;
var _default = AlertIcon;
exports["default"] = _default;