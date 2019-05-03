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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ToggleButton = function ToggleButton(_ref) {
  var isExpanded = _ref.isExpanded,
      onClick = _ref.onClick,
      className = _ref.className,
      id = _ref.id,
      textId = _ref.textId,
      contentId = _ref.contentId,
      props = _objectWithoutProperties(_ref, ["isExpanded", "onClick", "className", "id", "textId", "contentId"]);

  return _react["default"].createElement("button", _extends({
    onClick: onClick,
    className: (0, _reactStyles.css)(_clipboardCopyCss["default"].clipboardCopyGroupToggle, className),
    id: id,
    "aria-labelledby": "".concat(id, " ").concat(textId),
    "aria-controls": "".concat(contentId),
    "aria-expanded": "".concat(isExpanded)
  }, props), _react["default"].createElement(_reactIcons.AngleRightIcon, {
    "aria-hidden": "true",
    className: (0, _reactStyles.css)(_clipboardCopyCss["default"].clipboardCopyGroupToggleIcon)
  }));
};

ToggleButton.propTypes = {
  onClick: _propTypes["default"].func.isRequired,
  id: _propTypes["default"].string.isRequired,
  textId: _propTypes["default"].string.isRequired,
  contentId: _propTypes["default"].string.isRequired,
  isExpanded: _propTypes["default"].bool,
  className: _propTypes["default"].string
};
ToggleButton.defaultProps = {
  isExpanded: false,
  className: ''
};
var _default = ToggleButton;
exports["default"] = _default;