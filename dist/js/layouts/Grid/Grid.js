"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _gridCss = _interopRequireDefault(require("../../@patternfly/patternfly/layouts/Grid/grid.css.js"));

var _reactStyles = require("@patternfly/react-styles");

var _gutters = require("../../styles/gutters");

var _gridUtils = require("./gridUtils");

var _sizes = require("../../styles/sizes");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

var gridItemSpanValueShape = _propTypes["default"].oneOf(_gridUtils.gridSpans);

var propTypes = {
  /** content rendered inside the Grid layout */
  children: _propTypes["default"].any,

  /** additional classes added to the Grid layout */
  className: _propTypes["default"].string,

  /** Adds space between children. Options are sm, md or lg */
  gutter: _propTypes["default"].oneOf(Object.keys(_gutters.GutterSize)),

  /** The number of rows a column in the grid should span.  Value should be a number 1-12 */
  span: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a small device */
  sm: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a medium device */
  md: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a large device */
  lg: gridItemSpanValueShape,

  /** the number of columns all grid items should span on a xLarge device */
  xl: gridItemSpanValueShape,

  /** Additional props are spread to the container <div> */
  '': _propTypes["default"].any
};
var defaultProps = {
  children: null,
  className: '',
  gutter: null,
  span: null,
  sm: null,
  md: null,
  lg: null,
  xl: null
};

var Grid = function Grid(_ref) {
  var children = _ref.children,
      className = _ref.className,
      gutter = _ref.gutter,
      span = _ref.span,
      props = _objectWithoutProperties(_ref, ["children", "className", "gutter", "span"]);

  var classes = [_gridCss["default"].grid, span && (0, _gridUtils.getGridSpanModifier)(span)];
  Object.keys(_sizes.DeviceSizes).forEach(function (size) {
    var popProp = function popProp(propKey, getModifierFn) {
      var propValue = props[propKey];

      if (propValue) {
        classes.push(getModifierFn(propValue, size));
      }

      delete props[propKey];
    };

    popProp(size, _gridUtils.getGridSpanModifier);
  });
  return _react["default"].createElement("div", _extends({
    className: _reactStyles.css.apply(void 0, classes.concat([gutter && (0, _gutters.getGutterModifier)(_gridCss["default"], gutter, _gridCss["default"].modifiers && _gridCss["default"].modifiers.gutter), className]))
  }, props), children);
};

Grid.propTypes = propTypes;
Grid.defaultProps = defaultProps;
var _default = Grid;
exports["default"] = _default;