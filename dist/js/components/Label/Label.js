"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _labelCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Label/label.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var Label = function Label(_ref) {
  var className = _ref.className,
      children = _ref.children,
      isCompact = _ref.isCompact,
      props = _objectWithoutProperties(_ref, ["className", "children", "isCompact"]);

  return _react["default"].createElement("span", _extends({}, props, {
    className: (0, _reactStyles.css)(_labelCss["default"].label, className, isCompact && _labelCss["default"].modifiers.compact)
  }), children);
};

Label.propTypes = {
  /** Additional classes added to the label. */
  className: _propTypes["default"].string,

  /** Content rendered inside the label. */
  children: _propTypes["default"].node.isRequired,

  /** Flag to show if the label is compact. */
  isCompact: _propTypes["default"].bool,

  /** Additional props are spread to the container <span> */
  '': _propTypes["default"].any
};
Label.defaultProps = {
  className: '',
  isCompact: false
};
var _default = Label;
exports["default"] = _default;