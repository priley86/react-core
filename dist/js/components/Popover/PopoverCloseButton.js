"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactCore = require("@patternfly/react-core");

var _reactIcons = require("@patternfly/react-icons");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var PopoverCloseButton = function PopoverCloseButton(_ref) {
  var onClose = _ref.onClose,
      ariaLabel = _ref['aria-label'],
      rest = _objectWithoutProperties(_ref, ["onClose", "aria-label"]);

  return _react["default"].createElement(_reactCore.Button, {
    onClick: onClose,
    variant: "plain",
    "aria-label": ariaLabel
  }, _react["default"].createElement(_reactIcons.TimesIcon, null));
};

PopoverCloseButton.propTypes = {
  /** PopoverCloseButton onClose function */
  onClose: _propTypes["default"].func.isRequired,

  /** Aria label for the Close button */
  'aria-label': _propTypes["default"].string.isRequired
};
var _default = PopoverCloseButton;
exports["default"] = _default;