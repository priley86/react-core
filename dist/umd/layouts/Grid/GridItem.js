"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/layouts/Grid/grid.css.js", "@patternfly/react-styles", "../../styles/sizes", "./gridUtils"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/layouts/Grid/grid.css.js"), require("@patternfly/react-styles"), require("../../styles/sizes"), require("./gridUtils"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.gridCss, global.reactStyles, global.sizes, global.gridUtils);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _gridCss, _reactStyles, _sizes, _gridUtils) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _gridCss2 = _interopRequireDefault(_gridCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _extends() {
    _extends = Object.assign || function (target) {
      for (var i = 1; i < arguments.length; i++) {
        var source = arguments[i];

        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }

      return target;
    };

    return _extends.apply(this, arguments);
  }

  function _objectWithoutProperties(source, excluded) {
    if (source == null) return {};

    var target = _objectWithoutPropertiesLoose(source, excluded);

    var key, i;

    if (Object.getOwnPropertySymbols) {
      var sourceSymbolKeys = Object.getOwnPropertySymbols(source);

      for (i = 0; i < sourceSymbolKeys.length; i++) {
        key = sourceSymbolKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue;
        target[key] = source[key];
      }
    }

    return target;
  }

  function _objectWithoutPropertiesLoose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;

    for (i = 0; i < sourceKeys.length; i++) {
      key = sourceKeys[i];
      if (excluded.indexOf(key) >= 0) continue;
      target[key] = source[key];
    }

    return target;
  }

  var propTypes = {
    /** content rendered inside the Grid Layout Item */
    children: _propTypes2["default"].any,

    /** additional classes added to the Grid Layout Item */
    className: _propTypes2["default"].string,

    /** the number of columns the grid item spans. Value should be a number 1-12   */
    span: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of rows the grid item spans. Value should be a number 1-12   */
    rowSpan: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns a grid item is offset */
    offset: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item spans on small device. Value should be a number 1-12   */
    sm: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
    smRowSpan: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item is offset on small device. Value should be a number 1-12   */
    smOffset: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item spans on medium device. Value should be a number 1-12   */
    md: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of rows the grid item spans on medium device. Value should be a number 1-12   */
    mdRowSpan: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item is offset on medium device. Value should be a number 1-12   */
    mdOffset: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item spans on large device. Value should be a number 1-12   */
    lg: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
    lgRowSpan: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item is offset on large device. Value should be a number 1-12   */
    lgOffset: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item spans on xLarge device. Value should be a number 1-12   */
    xl: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of rows the grid item spans on large device. Value should be a number 1-12   */
    xlRowSpan: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** the number of columns the grid item is offset on xLarge device. Value should be a number 1-12   */
    xlOffset: _propTypes2["default"].oneOf(_gridUtils.gridSpans),

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    span: null,
    rowSpan: null,
    offset: null,
    sm: null,
    smRowSpan: null,
    smOffset: null,
    md: null,
    mdRowSpan: null,
    mdOffset: null,
    lg: null,
    lgRowSpan: null,
    lgOffset: null,
    xl: null,
    xlRowSpan: null,
    xlOffset: null
  };

  var GridItem = function GridItem(_ref) {
    var children = _ref.children,
        className = _ref.className,
        span = _ref.span,
        rowSpan = _ref.rowSpan,
        offset = _ref.offset,
        props = _objectWithoutProperties(_ref, ["children", "className", "span", "rowSpan", "offset"]);

    var classes = [_gridCss2["default"].gridItem, span && (0, _gridUtils.getSpanModifier)(span), offset && (0, _gridUtils.getOffsetModifier)(offset), rowSpan && (0, _gridUtils.getRowSpanModifier)(rowSpan)];
    Object.keys(_sizes.DeviceSizes).forEach(function (size) {
      var popProp = function popProp(propKey, getModifierFn) {
        var propValue = props[propKey];

        if (propValue) {
          classes.push(getModifierFn(propValue, size));
        }

        delete props[propKey];
      };

      popProp(size, _gridUtils.getSpanModifier);
      popProp((0, _gridUtils.getRowSpanKey)(size), _gridUtils.getRowSpanModifier);
      popProp((0, _gridUtils.getOffsetKey)(size), _gridUtils.getOffsetModifier);
    });
    return _react2["default"].createElement("div", _extends({
      className: _reactStyles.css.apply(void 0, classes.concat([className]))
    }, props), children);
  };

  GridItem.propTypes = propTypes;
  GridItem.defaultProps = defaultProps;
  exports["default"] = GridItem;
});