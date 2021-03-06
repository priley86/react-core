"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _stackCss = _interopRequireDefault(require("../../@patternfly/patternfly/layouts/Stack/stack.css.js"));

var _componentShape = require("../../helpers/componentShape");

var _gutters = require("../../styles/gutters");

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Adds space between children. Options are sm, md or lg */
  gutter: _propTypes["default"].oneOf(Object.keys(_gutters.GutterSize)),

  /** content rendered inside the Stack layout */
  children: _propTypes["default"].node,

  /** additional classes added to the Stack layout */
  className: _propTypes["default"].string,

  /** Sets the base component to render. defaults to div */
  component: _componentShape.componentShape,

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any
};
var defaultProps = {
  gutter: null,
  className: '',
  children: null,
  component: 'div'
};

var Stack = function Stack(_ref) {
  var gutter = _ref.gutter,
      className = _ref.className,
      children = _ref.children,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["gutter", "className", "children", "component"]);

  return _react["default"].createElement(Component, _extends({}, props, {
    className: (0, _reactStyles.css)(_stackCss["default"].stack, gutter && (0, _gutters.getGutterModifier)(_stackCss["default"], gutter, _stackCss["default"].modifiers.gutter), className)
  }), children);
};

Stack.propTypes = propTypes;
Stack.defaultProps = defaultProps;
var _default = Stack;
exports["default"] = _default;