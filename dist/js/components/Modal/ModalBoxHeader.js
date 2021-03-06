"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Title = require("../Title");

var _accessibilityCss = _interopRequireDefault(require("../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the Header */
  children: _propTypes["default"].node,

  /** additional classes added to the button */
  className: _propTypes["default"].string,

  /** Flag to show the title */
  hideTitle: _propTypes["default"].bool.isRequired,

  /** Additional props are spread to the container <header> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: ''
};

var ModalBoxHeader = function ModalBoxHeader(_ref) {
  var hideTitle = _ref.hideTitle,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["hideTitle", "children", "className"]);

  var hidden = hideTitle ? (0, _reactStyles.css)(_accessibilityCss["default"].screenReader) : '';
  return _react["default"].createElement(_react["default"].Fragment, null, _react["default"].createElement(_Title.Title, _extends({
    size: "2xl",
    headingLevel: "h3",
    className: className + hidden
  }, props), children));
};

ModalBoxHeader.propTypes = propTypes;
ModalBoxHeader.defaultProps = defaultProps;
var _default = ModalBoxHeader;
exports["default"] = _default;