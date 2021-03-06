"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.defaultProps = exports.propTypes = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _badgeCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Badge/badge.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /**  Adds styling to the badge to indicate it has been read */
  isRead: _propTypes["default"].bool,

  /** content rendered inside the Badge */
  children: _propTypes["default"].node,

  /** additional classes added to the Badge */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <span> */
  '': _propTypes["default"].any
};
exports.propTypes = propTypes;
var defaultProps = {
  isRead: false,
  children: '',
  className: ''
};
exports.defaultProps = defaultProps;

var Badge = function Badge(_ref) {
  var isRead = _ref.isRead,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["isRead", "className", "children"]);

  return _react["default"].createElement("span", _extends({}, props, {
    className: (0, _reactStyles.css)(_badgeCss["default"].badge, isRead ? _badgeCss["default"].modifiers.read : _badgeCss["default"].modifiers.unread, className)
  }), children);
};

Badge.propTypes = propTypes;
Badge.defaultProps = defaultProps;
var _default = Badge;
exports["default"] = _default;