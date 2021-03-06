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
  /** content rendered inside the Card Body */
  children: _propTypes["default"].any,

  /** additional classes added to the Card Body */
  className: _propTypes["default"].string,

  /** Sets the base component to render. defaults to div */
  component: _componentShape.componentShape,

  /** Enables the body Content to fill the height of the card */
  isFilled: _propTypes["default"].bool,

  /** Additional props are spread to the container component */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  component: 'div',
  isFilled: true
};

var CardBody = function CardBody(_ref) {
  var children = _ref.children,
      className = _ref.className,
      Component = _ref.component,
      isFilled = _ref.isFilled,
      props = _objectWithoutProperties(_ref, ["children", "className", "component", "isFilled"]);

  return _react["default"].createElement(Component, _extends({
    className: (0, _reactStyles.css)(_cardCss["default"].cardBody, !isFilled && _cardCss["default"].modifiers.noFill, className)
  }, props), children);
};

CardBody.propTypes = propTypes;
CardBody.defaultProps = defaultProps;
var _default = CardBody;
exports["default"] = _default;