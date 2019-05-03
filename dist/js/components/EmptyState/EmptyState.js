"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.EmptyStateVariant = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _emptyStateCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/EmptyState/empty-state.css.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var EmptyStateVariant = {
  large: 'large',
  small: 'small',
  full: 'full'
};
exports.EmptyStateVariant = EmptyStateVariant;
var maxWidthModifiers = {
  large: _emptyStateCss["default"].modifiers.lg,
  small: _emptyStateCss["default"].modifiers.sm,
  full: null
};

var EmptyState = function EmptyState(_ref) {
  var children = _ref.children,
      className = _ref.className,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["children", "className", "variant"]);

  var maxWidthModifier = variant && maxWidthModifiers[variant];
  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_emptyStateCss["default"].emptyState, maxWidthModifier && maxWidthModifier, className)
  }, props), children);
};

EmptyState.propTypes = {
  /** Additional classes added to the EmptyState */
  className: _propTypes["default"].string,

  /** Content rendered inside the EmptyState */
  children: _propTypes["default"].node.isRequired,

  /** Modifies EmptyState max-width */
  variant: _propTypes["default"].oneOf(Object.keys(EmptyStateVariant)),

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
EmptyState.defaultProps = {
  className: '',
  variant: EmptyStateVariant.large
};
var _default = EmptyState;
exports["default"] = _default;