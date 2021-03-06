"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _formCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Form/form.css.js"));

var _htmlConstants = require("../../helpers/htmlConstants");

var _FormContext = require("../Form/FormContext");

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Anything that can be rendered as FormGroup content. */
  children: _propTypes["default"].node,

  /** Additional classes added to the FormGroup. */
  className: _propTypes["default"].string,

  /** Label text before the field. */
  label: _propTypes["default"].node,

  /** Sets the FormGroup required. */
  isRequired: _propTypes["default"].bool,

  /** Sets the FormGroup isValid. */
  isValid: _propTypes["default"].bool,

  /** Sets the FormGroup isInline. */
  isInline: _propTypes["default"].bool,

  /** Helper text after the field. It can be a simple text or an object. */
  helperText: _propTypes["default"].node,

  /** Helper text after the field when the field is isValid. It can be a simple text or an object. */
  helperTextInvalid: _propTypes["default"].node,

  /** ID of the included field. It has to be the same for proper working. */
  fieldId: _propTypes["default"].string.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  label: undefined,
  isRequired: false,
  isValid: true,
  isInline: false,
  helperText: undefined,
  helperTextInvalid: undefined
};

var FormGroup = function FormGroup(_ref) {
  var className = _ref.className,
      children = _ref.children,
      label = _ref.label,
      isRequired = _ref.isRequired,
      isValid = _ref.isValid,
      isInline = _ref.isInline,
      helperText = _ref.helperText,
      helperTextInvalid = _ref.helperTextInvalid,
      fieldId = _ref.fieldId,
      props = _objectWithoutProperties(_ref, ["className", "children", "label", "isRequired", "isValid", "isInline", "helperText", "helperTextInvalid", "fieldId"]);

  return _react["default"].createElement(_FormContext.FormContext.Consumer, null, function (_ref2) {
    var isHorizontal = _ref2.isHorizontal;
    return _react["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_formCss["default"].formGroup, (0, _reactStyles.getModifier)(_formCss["default"], isInline && 'inline'), className)
    }), label && _react["default"].createElement("label", {
      className: (0, _reactStyles.css)(_formCss["default"].formLabel),
      htmlFor: fieldId
    }, label, isRequired && _react["default"].createElement("span", {
      className: (0, _reactStyles.css)(_formCss["default"].formLabelRequired),
      "aria-hidden": "true"
    }, _htmlConstants.ASTERISK)), isHorizontal ? _react["default"].createElement("div", {
      className: (0, _reactStyles.css)(_formCss["default"].formHorizontalGroup)
    }, children) : children, (isValid && helperText || !isValid && helperTextInvalid) && _react["default"].createElement("div", {
      className: (0, _reactStyles.css)(_formCss["default"].formHelperText, (0, _reactStyles.getModifier)(_formCss["default"], !isValid && 'error')),
      id: "".concat(fieldId, "-helper"),
      "aria-live": "polite"
    }, isValid ? helperText : helperTextInvalid));
  });
};

FormGroup.propTypes = propTypes;
FormGroup.defaultProps = defaultProps;
var _default = FormGroup;
exports["default"] = _default;