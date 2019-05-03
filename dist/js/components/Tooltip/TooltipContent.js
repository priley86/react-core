"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _tooltipCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Tooltip/tooltip.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var TooltipContent = function TooltipContent(_ref) {
  var className = _ref.className,
      children = _ref.children,
      id = _ref.id,
      rest = _objectWithoutProperties(_ref, ["className", "children", "id"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_tooltipCss["default"].tooltipContent, className)
  }, rest), children);
};

TooltipContent.propTypes = {
  /** TooltipContent additional class */
  className: _propTypes["default"].string,

  /** TooltipContent content */
  children: _propTypes["default"].node.isRequired
};
TooltipContent.defaultProps = {
  className: null
};
var _default = TooltipContent;
exports["default"] = _default;