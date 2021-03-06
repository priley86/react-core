"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.ListVariant = void 0;

var _react = _interopRequireDefault(require("react"));

var _listCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/List/list.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var ListVariant = {
  grid: 'grid',
  inline: 'inline'
};
exports.ListVariant = ListVariant;
var propTypes = {
  /** Anything that can be rendered inside of the list */
  children: _propTypes["default"].node,

  /** Additional classes added to the list. */
  className: _propTypes["default"].string,

  /** Adds list variant styles */
  variant: _propTypes["default"].oneOf(Object.values(ListVariant)),

  /** Additional props are spread to the container <ul> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  variant: null
};

var List = function List(_ref) {
  var className = _ref.className,
      children = _ref.children,
      variant = _ref.variant,
      props = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

  return _react["default"].createElement("ul", _extends({}, props, {
    className: (0, _reactStyles.css)(_listCss["default"].list, (0, _reactStyles.getModifier)(_listCss["default"].modifiers, variant), className)
  }), children);
};

List.propTypes = propTypes;
List.defaultProps = defaultProps;
var _default = List;
exports["default"] = _default;