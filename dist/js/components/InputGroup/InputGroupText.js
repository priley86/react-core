"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _inputGroupCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/InputGroup/input-group.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _componentShape = require("../../helpers/componentShape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var InputGroupText = function InputGroupText(_ref) {
  var Component = _ref.component,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["component", "className", "children"]);

  return _react["default"].createElement(Component, _extends({
    className: (0, _reactStyles.css)(_inputGroupCss["default"].inputGroupText, className)
  }, props), children);
};

InputGroupText.propTypes = {
  /** Additional classes added to the input group text. */
  className: _propTypes["default"].string,

  /** Content rendered inside the input group text. */
  children: _propTypes["default"].node.isRequired,

  /** Component that wraps the input group text. */
  component: _componentShape.componentShape
};
InputGroupText.defaultProps = {
  className: '',
  component: 'span'
};
var _default = InputGroupText;
exports["default"] = _default;