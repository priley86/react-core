"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.PopoverPosition = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _popoverCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Popover/popover.css.js"));

var _reactStyles = require("@patternfly/react-styles");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopoverPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};
exports.PopoverPosition = PopoverPosition;

var PopoverDialog = function PopoverDialog(_ref) {
  var position = _ref.position,
      children = _ref.children,
      className = _ref.className,
      props = _objectWithoutProperties(_ref, ["position", "children", "className"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_popoverCss["default"].popover, (0, _reactStyles.getModifier)(_popoverCss["default"], position, _popoverCss["default"].modifiers.top), className),
    role: "dialog",
    "aria-modal": "true"
  }, props), children);
};

PopoverDialog.propTypes = {
  /** PopoverDialog position */
  position: _propTypes["default"].oneOf(Object.values(PopoverPosition)),

  /** PopoverDialog additional class */
  className: _propTypes["default"].string,

  /** PopoverDialog body */
  children: _propTypes["default"].node.isRequired,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
PopoverDialog.defaultProps = {
  position: 'top',
  className: null
};
var _default = PopoverDialog;
exports["default"] = _default;