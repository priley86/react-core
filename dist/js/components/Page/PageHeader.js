"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _pageCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Page/page.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _Button = require("../../components/Button");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Additional classes added to the page header */
  className: _propTypes["default"].string,

  /** Component to render the logo/brand (e.g. <Brand />) */
  logo: _propTypes["default"].node,

  /** Additional props passed to the logo anchor container */
  logoProps: _propTypes["default"].object,

  /** Component to render the toolbar (e.g. <Toolbar />) */
  toolbar: _propTypes["default"].node,

  /** Component to render the avatar (e.g. <Avatar /> */
  avatar: _propTypes["default"].node,

  /** Component to render navigation within the header (e.g. <Nav /> */
  topNav: _propTypes["default"].node,

  /** True to show the nav toggle button (toggles side nav) */
  showNavToggle: _propTypes["default"].bool,

  /** Callback function to handle the side nav toggle button, managed by the Page component if the Page isManagedSidebar prop is set to true */
  onNavToggle: _propTypes["default"].func,

  /** True if the side nav is shown  */
  isNavOpen: _propTypes["default"].bool,

  /** Callback function to handle the side nav toggle button */
  'aria-label': _propTypes["default"].string,

  /** Additional props are spread to the container <header> */
  '': _propTypes["default"].any
};
var defaultProps = {
  className: '',
  logo: null,
  logoProps: null,
  toolbar: null,
  avatar: null,
  topNav: null,
  showNavToggle: false,
  isNavOpen: true,
  onNavToggle: function onNavToggle() {
    return undefined;
  },
  'aria-label': 'Global navigation'
};

var PageHeader = function PageHeader(_ref) {
  var className = _ref.className,
      logo = _ref.logo,
      logoProps = _ref.logoProps,
      toolbar = _ref.toolbar,
      avatar = _ref.avatar,
      topNav = _ref.topNav,
      isNavOpen = _ref.isNavOpen,
      showNavToggle = _ref.showNavToggle,
      onNavToggle = _ref.onNavToggle,
      ariaLabel = _ref['aria-label'],
      props = _objectWithoutProperties(_ref, ["className", "logo", "logoProps", "toolbar", "avatar", "topNav", "isNavOpen", "showNavToggle", "onNavToggle", "aria-label"]);

  return _react["default"].createElement("header", _extends({
    role: "banner",
    className: (0, _reactStyles.css)(_pageCss["default"].pageHeader, className)
  }, props), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_pageCss["default"].pageHeaderBrand)
  }, showNavToggle && _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_pageCss["default"].pageHeaderBrandToggle)
  }, _react["default"].createElement(_Button.Button, {
    id: "nav-toggle",
    onClick: onNavToggle,
    "aria-label": ariaLabel,
    "aria-controls": "page-sidebar",
    "aria-expanded": isNavOpen ? 'true' : 'false',
    variant: _Button.ButtonVariant.plain
  }, _react["default"].createElement(_reactIcons.BarsIcon, null))), _react["default"].createElement("a", _extends({
    className: (0, _reactStyles.css)(_pageCss["default"].pageHeaderBrandLink)
  }, logoProps), logo)), topNav && _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_pageCss["default"].pageHeaderNav)
  }, topNav), _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_pageCss["default"].pageHeaderTools)
  }, toolbar, avatar));
};

PageHeader.propTypes = propTypes;
PageHeader.defaultProps = defaultProps;
var _default = PageHeader;
exports["default"] = _default;