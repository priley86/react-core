"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _loginCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Login/login.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered inside the footer Link Item */
  children: _propTypes["default"].node,

  /** HREF for Footer Link Item */
  href: _propTypes["default"].string,

  /** Target for Footer Link Item */
  target: _propTypes["default"].string,

  /** Additional classes added to the Footer Link Item  */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <a> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  href: '',
  target: '',
  className: ''
};

var LoginMainFooterLinksItem = function LoginMainFooterLinksItem(_ref) {
  var className = _ref.className,
      children = _ref.children,
      href = _ref.href,
      target = _ref.target,
      props = _objectWithoutProperties(_ref, ["className", "children", "href", "target"]);

  return _react["default"].createElement("li", _extends({
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainFooterLinksItem, className)
  }, props), _react["default"].createElement("a", {
    className: (0, _reactStyles.css)(_loginCss["default"].loginMainFooterLinksItemLink),
    href: href,
    target: target
  }, children));
};

LoginMainFooterLinksItem.propTypes = propTypes;
LoginMainFooterLinksItem.defaultProps = defaultProps;
var _default = LoginMainFooterLinksItem;
exports["default"] = _default;