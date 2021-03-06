"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _splitCss = _interopRequireDefault(require("../../@patternfly/patternfly/layouts/Split/split.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** Flag indicating if this Split Layout item should fill the available horizontal space. */
  isFilled: _propTypes["default"].bool,

  /** content rendered inside the Split Layout Item */
  children: _propTypes["default"].node,

  /** additional classes added to the Split Layout Item */
  className: _propTypes["default"].string,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  isFilled: false,
  className: '',
  children: null
};

var SplitItem = function SplitItem(_ref) {
  var isFilled = _ref.isFilled,
      className = _ref.className,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["isFilled", "className", "children"]);

  return _react["default"].createElement("div", _extends({}, props, {
    className: (0, _reactStyles.css)(_splitCss["default"].splitItem, isFilled && _splitCss["default"].modifiers.fill, className)
  }), children);
};

SplitItem.propTypes = propTypes;
SplitItem.defaultProps = defaultProps;
var _default = SplitItem;
exports["default"] = _default;