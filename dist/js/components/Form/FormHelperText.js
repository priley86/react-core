"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _reactStyles = require("@patternfly/react-styles");

var _formCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Form/form.css.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _react = _interopRequireDefault(require("react"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered inside the Helper Text Item */
  children: _propTypes["default"].node,

  /** Adds error styling to the Helper Text  * */
  isError: _propTypes["default"].bool,

  /** Hides the helper text * */
  isHidden: _propTypes["default"].bool,

  /** Additional classes added to the Helper Text  Item  */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <p> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  isError: false,
  isHidden: true,
  className: ''
};

var FormHelperText = function FormHelperText(_ref) {
  var className = _ref.className,
      isError = _ref.isError,
      isHidden = _ref.isHidden,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "isError", "isHidden", "children"]);

  return _react["default"].createElement("p", _extends({
    className: (0, _reactStyles.css)(_formCss["default"].formHelperText, (0, _reactStyles.getModifier)(_formCss["default"], isError && 'error'), (0, _reactStyles.getModifier)(_formCss["default"], isHidden && 'hidden'), className)
  }, props), children);
};

FormHelperText.propTypes = propTypes;
FormHelperText.defaultProps = defaultProps;
var _default = FormHelperText;
exports["default"] = _default;