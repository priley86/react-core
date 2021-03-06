"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _breadcrumbCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _reactStyles = require("@patternfly/react-styles");

var _componentShape = require("../../helpers/componentShape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered inside the breadcrumb item. */
  children: _propTypes["default"].node,

  /** Additional classes added to the breadcrumb item. */
  className: _propTypes["default"].string,

  /** HREF for breadcrumb link. */
  to: _propTypes["default"].string,

  /** Flag indicating whether the item is active. */
  isActive: _propTypes["default"].bool,

  /** Target for breadcrumb link. */
  target: _propTypes["default"].string,

  /** Sets the base component to render. Defaults to <a> */
  component: _componentShape.componentShape,

  /** Additional props are spread to the container <li> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  to: null,
  isActive: false,
  target: null,
  component: 'a'
};

var BreadcrumbItem = function BreadcrumbItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      to = _ref.to,
      isActive = _ref.isActive,
      target = _ref.target,
      Component = _ref.component,
      props = _objectWithoutProperties(_ref, ["className", "children", "to", "isActive", "target", "component"]);

  return _react["default"].createElement("li", _extends({}, props, {
    className: (0, _reactStyles.css)(_breadcrumbCss["default"].breadcrumbItem, className)
  }), to && _react["default"].createElement(Component, {
    href: to,
    target: target,
    className: (0, _reactStyles.css)(_breadcrumbCss["default"].breadcrumbLink, (0, _reactStyles.getModifier)(_breadcrumbCss["default"], isActive && 'current')),
    "aria-current": isActive ? 'page' : undefined
  }, children), !to && _react["default"].createElement(_react["default"].Fragment, null, children), !isActive && _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_breadcrumbCss["default"].breadcrumbItemDivider)
  }, _react["default"].createElement(_reactIcons.AngleRightIcon, null)));
};

BreadcrumbItem.propTypes = propTypes;
BreadcrumbItem.defaultProps = defaultProps;
var _default = BreadcrumbItem;
exports["default"] = _default;