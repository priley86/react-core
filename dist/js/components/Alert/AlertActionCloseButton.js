"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Button = require("../Button");

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** additional classes added to the AlertActionCloseButton */
  className: _propTypes["default"].string,

  /** A callback for when the close button is clicked */
  onClose: _propTypes["default"].func,

  /** Aria Label for the Close button */
  'aria-label': _propTypes["default"].string,

  /** Additional props are spread to the container <Button>  */
  '': _propTypes["default"].any
};
var defaultProps = {
  'aria-label': '',
  className: '',
  onClose: function onClose() {
    return undefined;
  }
};

var AlertActionCloseButton = function AlertActionCloseButton(_ref) {
  var className = _ref.className,
      onClose = _ref.onClose,
      ariaLabel = _ref['aria-label'],
      title = _ref.title,
      variantLabel = _ref.variantLabel,
      props = _objectWithoutProperties(_ref, ["className", "onClose", "aria-label", "title", "variantLabel"]);

  return _react["default"].createElement(_Button.Button, _extends({
    variant: _Button.ButtonVariant.plain,
    onClick: onClose,
    "aria-label": ariaLabel === '' ? "Close ".concat(variantLabel, " alert: ").concat(title) : ariaLabel
  }, props), _react["default"].createElement(_reactIcons.TimesIcon, null));
};

AlertActionCloseButton.propTypes = propTypes;
AlertActionCloseButton.defaultProps = defaultProps;
var _default = AlertActionCloseButton;
exports["default"] = _default;