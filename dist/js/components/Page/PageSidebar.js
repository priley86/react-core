"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pageCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Page/page.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Additional classes added to the page sidebar */
  className: _propTypes["default"].string,

  /** Component to render the side navigation (e.g. <Nav /> */
  nav: _propTypes["default"].node,

  /** Programmatically manage if the side nav is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
  isNavOpen: _propTypes["default"].bool,

  /** Additional props are spread to the container <aside> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  nav: null,
  isNavOpen: true
};

var PageSidebar = function PageSidebar(_ref) {
  var className = _ref.className,
      nav = _ref.nav,
      isNavOpen = _ref.isNavOpen,
      props = _objectWithoutProperties(_ref, ["className", "nav", "isNavOpen"]);

  return _react["default"].createElement("div", _extends({
    id: "page-sidebar",
    className: (0, _reactStyles.css)(_pageCss["default"].pageSidebar, isNavOpen && _pageCss["default"].modifiers.expanded, !isNavOpen && _pageCss["default"].modifiers.collapsed, className)
  }, props), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_pageCss["default"].pageSidebarBody)
  }, nav));
};

PageSidebar.propTypes = propTypes;
PageSidebar.defaultProps = defaultProps;
var _default = PageSidebar;
exports["default"] = _default;