"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PageSectionVariants = void 0;

var _react = _interopRequireDefault(require("react"));

var _pageCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Page/page.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PageSectionVariants = {
  "default": 'default',
  light: 'light',
  dark: 'dark',
  darker: 'darker'
};
exports.PageSectionVariants = PageSectionVariants;
var propTypes = {
  /** Content rendered inside the section */
  children: _propTypes["default"].node,

  /** Additional classes added to the section */
  className: _propTypes["default"].string,

  /** Section background color variant */
  variant: _propTypes["default"].oneOf(Object.values(PageSectionVariants)),

  /** Modifies a main page section to have no padding */
  noPadding: _propTypes["default"].bool,

  /** Modifies a main page section to have no padding on mobile */
  noPaddingMobile: _propTypes["default"].bool,

  /** Additional props are spread to the container <section> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  variant: 'default',
  noPadding: false,
  noPaddingMobile: false
};

var PageSection = function PageSection(_ref) {
  var _variantStyle;

  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      noPadding = _ref.noPadding,
      noPaddingMobile = _ref.noPaddingMobile,
      props = _objectWithoutProperties(_ref, ["className", "children", "variant", "noPadding", "noPaddingMobile"]);

  var variantStyle = (_variantStyle = {}, _defineProperty(_variantStyle, PageSectionVariants["default"], ''), _defineProperty(_variantStyle, PageSectionVariants.light, _pageCss["default"].modifiers.light), _defineProperty(_variantStyle, PageSectionVariants.dark, _pageCss["default"].modifiers.dark_200), _defineProperty(_variantStyle, PageSectionVariants.darker, _pageCss["default"].modifiers.dark_100), _variantStyle);
  return _react["default"].createElement("section", _extends({}, props, {
    className: (0, _reactStyles.css)(_pageCss["default"].pageMainSection, noPadding && _pageCss["default"].modifiers.noPadding, noPaddingMobile && _pageCss["default"].modifiers.noPaddingMobile, variantStyle[variant], className)
  }), children);
};

PageSection.propTypes = propTypes;
PageSection.defaultProps = defaultProps;
var _default = PageSection;
exports["default"] = _default;