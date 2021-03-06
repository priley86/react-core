"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _contentCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Content/content.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Content rendered within the TextContent */
  children: _propTypes["default"].node,

  /** Additional classes added to the TextContent */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: ''
}; // Get the stylesheet and make it more specific by appending [data-pf-content] attribute to selectors
// This way even if other components are nested within the TextContent, their text styling will not be affected

var moreSpecificStyles = _contentCss["default"].raw.replace(/(.pf-c-content\s[a-zA-Z0-9]+)/g, '$1[data-pf-content]');

var updatedStyles = _reactStyles.StyleSheet.parse(moreSpecificStyles);

var TextContent = function TextContent(_ref) {
  var children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["children", "className"]);

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(updatedStyles.content, className)
  }), children);
};

TextContent.propTypes = propTypes;
TextContent.defaultProps = defaultProps;
var _default = TextContent;
exports["default"] = _default;