"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _reactStyles = require("@patternfly/react-styles");

var _galleryCss = _interopRequireDefault(require("../../@patternfly/patternfly/layouts/Gallery/gallery.css.js"));

var _gutters = require("../../styles/gutters");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var propTypes = {
  /** content rendered inside the Gallery layout */
  children: _propTypes["default"].any,

  /** additional classes added to the Gallery layout */
  className: _propTypes["default"].string,

  /** Adds space between children. Options are sm, md or lg */
  gutter: _propTypes["default"].oneOf(Object.keys(_gutters.GutterSize)),

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  gutter: null
};

var Gallery = function Gallery(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutter = _ref.gutter,
      props = _objectWithoutProperties(_ref, ["children", "className", "gutter"]);

  return _react["default"].createElement("div", _extends({
    className: (0, _reactStyles.css)(_galleryCss["default"].gallery, gutter && (0, _gutters.getGutterModifier)(_galleryCss["default"], gutter, _galleryCss["default"].modifiers.gutter), className)
  }, props), children);
};

Gallery.propTypes = propTypes;
Gallery.defaultProps = defaultProps;
var _default = Gallery;
exports["default"] = _default;