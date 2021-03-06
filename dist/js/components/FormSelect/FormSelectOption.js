"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** additional classes added to the Select Option */
  className: _propTypes["default"].string,

  /** the value for the option */
  value: _propTypes["default"].any,

  /** the label for the option */
  label: _propTypes["default"].string.isRequired,

  /** flag indicating if the option is disabled */
  isDisabled: _propTypes["default"].bool,

  /** Additional props are spread to the container <option> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  value: '',
  isDisabled: false
};

var FormSelectOption = function FormSelectOption(_ref) {
  var className = _ref.className,
      value = _ref.value,
      label = _ref.label,
      isDisabled = _ref.isDisabled,
      props = _objectWithoutProperties(_ref, ["className", "value", "label", "isDisabled"]);

  return _react["default"].createElement("option", _extends({}, props, {
    className: className,
    value: value,
    disabled: isDisabled
  }), label);
};

FormSelectOption.propTypes = propTypes;
FormSelectOption.defaultProps = defaultProps;
var _default = FormSelectOption;
exports["default"] = _default;