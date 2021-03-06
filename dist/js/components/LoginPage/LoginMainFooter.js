"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _loginCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Login/login.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered inside the Login Main Footer */
  children: _propTypes["default"].node,

  /** Content rendered inside the Login Main Footer as Social Media Links* */
  socialMediaLoginContent: _propTypes["default"].node,

  /** Content rendered inside of Login Main Footer Band to display a sign up for account message */
  signUpForAccountMessage: _propTypes["default"].node,

  /** Content rendered inside of Login Main Footer Band do display a forgot credentials link* */
  forgotCredentials: _propTypes["default"].node,

  /** Additional classes added to the Login Main Footer */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  socialMediaLoginContent: null,
  signUpForAccountMessage: null,
  forgotCredentials: null,
  className: ''
};

var LoginMainFooter = function LoginMainFooter(_ref) {
  var children = _ref.children,
      socialMediaLoginContent = _ref.socialMediaLoginContent,
      signUpForAccountMessage = _ref.signUpForAccountMessage,
      forgotCredentials = _ref.forgotCredentials,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "socialMediaLoginContent", "signUpForAccountMessage", "forgotCredentials", "className"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainFooter, className)
  }, props), children, socialMediaLoginContent && _react["default"].createElement("ul", {
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainFooterLinks)
  }, socialMediaLoginContent), (signUpForAccountMessage || forgotCredentials) && _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainFooterBand)
  }, signUpForAccountMessage, forgotCredentials));
};

LoginMainFooter.propTypes = propTypes;
LoginMainFooter.defaultProps = defaultProps;
var _default = LoginMainFooter;
exports["default"] = _default;