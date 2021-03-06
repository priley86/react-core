"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.AlertVariant = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _alertCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Alert/alert.css.js"));

var _accessibilityCss = _interopRequireDefault(require("../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js"));

var _AlertIcon = _interopRequireDefault(require("./AlertIcon"));

var _util = require("../../helpers/util");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AlertVariant = {
  success: 'success',
  danger: 'danger',
  warning: 'warning',
  info: 'info'
};
exports.AlertVariant = AlertVariant;
var propTypes = {
  /** Adds Alert variant styles */
  variant: _propTypes["default"].oneOf(Object.values(AlertVariant)).isRequired,

  /** Title of the Alert */
  title: _propTypes["default"].node.isRequired,

  /** Action button to put in the Alert.  Should be <AlertActionLink> or <AlertActionCloseButton> */
  action: _propTypes["default"].node,

  /** content rendered inside the Alert */
  children: _propTypes["default"].node,

  /** additional classes added to the Alert */
  className: _propTypes["default"].string,

  /** Adds accessible text to the Alert */
  'aria-label': _propTypes["default"].string,

  /** Variant label text for screen readers */
  variantLabel: _propTypes["default"].string,

  /** Additional props are spread to the container <div>  */
  '': _propTypes["default"].any
};
var defaultProps = {
  'aria-label': undefined,
  action: null,
  children: '',
  className: '',
  variantLabel: null
};

var getDefaultAriaLabel = function getDefaultAriaLabel(variant) {
  return "".concat((0, _util.capitalize)(AlertVariant[variant]), " Alert");
};

var Alert = function Alert(_ref) {
  var variant = _ref.variant,
      variantLabel = _ref.variantLabel,
      _ref$ariaLabel = _ref['aria-label'],
      ariaLabel = _ref$ariaLabel === void 0 ? getDefaultAriaLabel(variant) : _ref$ariaLabel,
      action = _ref.action,
      title = _ref.title,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["variant", "variantLabel", "aria-label", "action", "title", "children", "className"]);

  variantLabel = variantLabel || (0, _util.capitalize)(AlertVariant[variant]);

  var readerTitle = _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_accessibilityCss["default"].screenReader)
  }, "".concat(variantLabel, " alert:")), title);

  var customClassName = (0, _reactStyles.css)(_alertCss["default"].alert, (0, _reactStyles.getModifier)(_alertCss["default"], variant, _alertCss["default"].modifiers.info), className);
  return _react["default"].createElement("div", _extends({}, props, {
    className: customClassName,
    "aria-label": ariaLabel
  }), _react["default"].createElement(_AlertIcon["default"], {
    variant: variant
  }), _react["default"].createElement("h4", {
    className: (0, _reactStyles.css)(_alertCss["default"].alertTitle)
  }, readerTitle), children && _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_alertCss["default"].alertDescription)
  }, _react["default"].createElement("p", null, children)), action && _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_alertCss["default"].alertAction, className)
  }, _react["default"].cloneElement(action, {
    title: title,
    variantLabel: variantLabel
  })));
};

Alert.propTypes = propTypes;
Alert.defaultProps = defaultProps;
var _default = Alert;
exports["default"] = _default;