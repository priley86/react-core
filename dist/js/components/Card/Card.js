"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _cardCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Card/card.css.js"));

var _componentShape = require("../../helpers/componentShape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the Card */
  children: _propTypes["default"].any,

  /** additional classes added to the Card */
  className: _propTypes["default"].string,

  /** Sets the base component to render. defaults to article */
  component: _componentShape.componentShape,

  /** Modifies the card to include hover styles on :hover */
  isHoverable: _propTypes["default"].bool,

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  component: 'article',
  isHoverable: false
};

var Card = function Card(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.component,
      isHoverable = _ref.isHoverable,
      props = _objectWithoutProperties(_ref, ["children", "className", "component", "isHoverable"]);

  return _react["default"].createElement(Component, _extends({
    className: (0, _reactStyles.css)(_cardCss["default"].card, isHoverable && _cardCss["default"].modifiers.hoverable, className)
  }, props), children);
};

Card.propTypes = propTypes;
Card.defaultProps = defaultProps;
var _default = Card;
exports["default"] = _default;