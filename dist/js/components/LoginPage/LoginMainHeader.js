"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Title = require("../Title");

var _reactStyles = require("@patternfly/react-styles");

var _loginCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Login/login.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered inside the Login Main Header */
  children: _propTypes["default"].node,

  /** Additional classes added to the Login Main Header */
  className: _propTypes["default"].string,

  /** Title for the Login Main Header */
  title: _propTypes["default"].string,

  /** Subtitle that contains the Text, URL, and URL Text for the Login Main Header */
  subtitle: _propTypes["default"].node,

  /** Additional props are spread to the container <header> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  title: '',
  subtitle: ''
};

var LoginMainHeader = function LoginMainHeader(_ref) {
  var children = _ref.children,
      className = _ref.className,
      title = _ref.title,
      subtitle = _ref.subtitle,
      props = _objectWithoutProperties(_ref, ["children", "className", "title", "subtitle"]);

  return _react["default"].createElement("header", _extends({
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainHeader, className)
  }, props), title && _react["default"].createElement(_Title.Title, {
    headingLevel: "h2",
    size: "3xl"
  }, title), subtitle && _react["default"].createElement("p", {
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainHeaderDesc)
  }, subtitle), children);
};

LoginMainHeader.propTypes = propTypes;
LoginMainHeader.defaultProps = defaultProps;
var _default = LoginMainHeader;
exports["default"] = _default;