"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactIcons = require("@patternfly/react-icons");

var _optionsMenuCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _helpers = require("../../helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var OptionsToggle = function OptionsToggle(_ref) {
  var itemsTitle = _ref.itemsTitle,
      optionsToggle = _ref.optionsToggle,
      firstIndex = _ref.firstIndex,
      lastIndex = _ref.lastIndex,
      itemCount = _ref.itemCount,
      widgetId = _ref.widgetId,
      onToggle = _ref.onToggle,
      isOpen = _ref.isOpen,
      ToggleTemplate = _ref.toggleTemplate;
  return _react["default"].createElement("div", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggle, (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'plain'), (0, _reactStyles.getModifier)(_optionsMenuCss["default"], 'text'))
  }, _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggleText)
  }, typeof ToggleTemplate === 'string' ? (0, _helpers.fillTemplate)(ToggleTemplate, {
    firstIndex: firstIndex,
    lastIndex: lastIndex,
    itemCount: itemCount,
    itemsTitle: itemsTitle
  }) : _react["default"].createElement(ToggleTemplate, {
    firstIndex: firstIndex,
    lastIndex: lastIndex,
    itemCount: itemCount,
    itemsTitle: itemsTitle
  })), _react["default"].createElement("button", {
    className: (0, _reactStyles.css)(_optionsMenuCss["default"].optionsMenuToggleButton),
    id: "".concat(widgetId, "-toggle"),
    "aria-haspopup": "listbox",
    "aria-labelledby": "".concat(widgetId, "-toggle ").concat(widgetId, "-label"),
    "aria-label": optionsToggle,
    "aria-expanded": isOpen,
    onClick: function onClick() {
      return onToggle(!isOpen);
    },
    type: "button"
  }, _react["default"].createElement(_reactIcons.CaretDownIcon, null)));
};

OptionsToggle.propTypes = {
  itemsTitle: _propTypes["default"].string,
  firstIndex: _propTypes["default"].number,
  lastIndex: _propTypes["default"].number,
  itemCount: _propTypes["default"].number,
  widgetId: _propTypes["default"].string,
  onToggle: _propTypes["default"].func,
  isOpen: _propTypes["default"].bool,
  toggleTemplate: _propTypes["default"].oneOfType([_propTypes["default"].string, _propTypes["default"].func])
};
OptionsToggle.defaultProps = {
  itemsTitle: 'items',
  optionsToggle: 'Select',
  firstIndex: 0,
  lastIndex: 0,
  itemCount: 0,
  onToggle: function onToggle() {
    return undefined;
  },
  isOpen: false
};
var _default = OptionsToggle;
exports["default"] = _default;