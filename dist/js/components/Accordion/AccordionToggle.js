"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _reactIcons = require("@patternfly/react-icons");

var _accordionCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Accordion/accordion.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var AccordionToggle = function AccordionToggle(_ref) {
  var className = _ref.className,
      id = _ref.id,
      isExpanded = _ref.isExpanded,
      children = _ref.children,
      props = _objectWithoutProperties(_ref, ["className", "id", "isExpanded", "children"]);

  return _react["default"].createElement("dt", null, _react["default"].createElement("h3", null, _react["default"].createElement("button", _extends({
    id: id,
    className: (0, _reactStyles.css)(_accordionCss["default"].accordionToggle, isExpanded && _accordionCss["default"].modifiers.expanded, className)
  }, props, {
    variant: "plain",
    "aria-expanded": isExpanded
  }), _react["default"].createElement("span", {
    className: (0, _reactStyles.css)(_accordionCss["default"].accordionToggleText)
  }, children), _react["default"].createElement(_reactIcons.AngleRightIcon, {
    className: (0, _reactStyles.css)(_accordionCss["default"].accordionToggleIcon)
  }))));
};

AccordionToggle.propTypes = {
  /** Additional classes added to the Accordion Toggle */
  className: _propTypes["default"].string,

  /** Flag to show if the expanded content of the Accordion item is visible */
  isExpanded: _propTypes["default"].bool,

  /** Identify the Accordion toggle number */
  id: _propTypes["default"].string.isRequired,

  /** Additional props are spread to the container <dt> */
  '': _propTypes["default"].any
};
AccordionToggle.defaultProps = {
  className: '',
  isExpanded: false
};
var _default = AccordionToggle;
exports["default"] = _default;