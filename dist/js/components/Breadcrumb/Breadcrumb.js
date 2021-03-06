"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _breadcrumbCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
  children: _propTypes["default"].node,

  /** Additional classes added to the breadcrumb nav. */
  className: _propTypes["default"].string,

  /** Aria-label added to the breadcrumb nav. */
  'aria-label': _propTypes["default"].string,

  /** Additional props are spread to the container <nav> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  'aria-label': 'Breadcrumb'
};

var Breadcrumb = function Breadcrumb(_ref) {
  var className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "children"]);

  return _react["default"].createElement("nav", _extends({}, props, {
    className: (0, _reactStyles.css)(_breadcrumbCss["default"].breadcrumb, className)
  }), _react["default"].createElement("ol", {
    className: (0, _reactStyles.css)(_breadcrumbCss["default"].breadcrumbList)
  }, children));
};

Breadcrumb.propTypes = propTypes;
Breadcrumb.defaultProps = defaultProps;
var _default = Breadcrumb;
exports["default"] = _default;