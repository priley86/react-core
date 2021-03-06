"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _formCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Form/form.css.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _FormContext = require("./FormContext");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Anything that can be rendered as Form content. */
  children: _propTypes["default"].node,

  /** Additional classes added to the Form. */
  className: _propTypes["default"].string,

  /** Sets the Form to horizontal. */
  isHorizontal: _propTypes["default"].bool,

  /** Additional props are spread to the container <form> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  isHorizontal: false
};

var Form = function Form(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isHorizontal = _ref.isHorizontal,
      props = _objectWithoutProperties(_ref, ["className", "children", "isHorizontal"]);

  return _react["default"].createElement("form", _extends({
    noValidate: true
  }, props, {
    className: (0, _reactStyles.css)(_formCss["default"].form, isHorizontal && _formCss["default"].modifiers.horizontal, className)
  }), _react["default"].createElement(_FormContext.FormContext.Provider, {
    value: {
      isHorizontal: isHorizontal
    }
  }, children));
};

Form.propTypes = propTypes;
Form.defaultProps = defaultProps;
var _default = Form;
exports["default"] = _default;