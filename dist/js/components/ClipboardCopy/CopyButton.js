"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _clipboardCopyCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/ClipboardCopy/clipboard-copy.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _Tooltip = require("../Tooltip");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var CopyButton = function CopyButton(_ref) {
  var className = _ref.className,
      onClick = _ref.onClick,
      exitDelay = _ref.exitDelay,
      entryDelay = _ref.entryDelay,
      maxWidth = _ref.maxWidth,
      position = _ref.position,
      children = _ref.children,
      ariaLabel = _ref['aria-label'],
      id = _ref.id,
      textId = _ref.textId,
      props = _objectWithoutProperties(_ref, ["className", "onClick", "exitDelay", "entryDelay", "maxWidth", "position", "children", "aria-label", "id", "textId"]);

  return _react["default"].createElement(_Tooltip.Tooltip, {
    trigger: 'mouseenter focus click',
    exitDelay: exitDelay,
    entryDelay: entryDelay,
    maxWidth: maxWidth,
    position: position,
    content: _react["default"].createElement("div", null, children)
  }, _react["default"].createElement("button", _extends({
    onClick: onClick,
    className: (0, _reactStyles.css)(_clipboardCopyCss["default"].clipboardCopyGroupCopy, className),
    "aria-label": ariaLabel,
    id: id,
    "aria-labelledby": "".concat(id, " ").concat(textId)
  }, props), _react["default"].createElement(_reactIcons.CopyIcon, null)));
};

CopyButton.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  children: _propTypes["default"].node.isRequired,
  id: _propTypes["default"].string.isRequired,
  textId: _propTypes["default"].string.isRequired,
  className: _propTypes["default"].string,
  exitDelay: _propTypes["default"].number,
  entryDelay: _propTypes["default"].number,
  maxWidth: _propTypes["default"].string,
  position: _propTypes["default"].oneOf(Object.keys(_Tooltip.TooltipPosition)),
  'aria-label': _propTypes["default"].string
};
CopyButton.defaultProps = {
  className: '',
  exitDelay: 100,
  entryDelay: 100,
  maxWidth: '100px',
  position: 'top',
  'aria-label': 'Copyable input'
};
var _default = CopyButton;
exports["default"] = _default;