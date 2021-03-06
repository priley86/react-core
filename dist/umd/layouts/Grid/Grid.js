"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/layouts/Grid/grid.css.js", "@patternfly/react-styles", "../../styles/gutters", "./gridUtils", "../../styles/sizes"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/layouts/Grid/grid.css.js"), require("@patternfly/react-styles"), require("../../styles/gutters"), require("./gridUtils"), require("../../styles/sizes"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.gridCss, global.reactStyles, global.gutters, global.gridUtils, global.sizes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _gridCss, _reactStyles, _gutters, _gridUtils, _sizes) {
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

  var gridItemSpanValueShape = _propTypes2["default"].oneOf(_gridUtils.gridSpans);

  var propTypes = {
    /** content rendered inside the Grid layout */
    children: _propTypes2["default"].any,

    /** additional classes added to the Grid layout */
    className: _propTypes2["default"].string,

    /** Adds space between children. Options are sm, md or lg */
    gutter: _propTypes2["default"].oneOf(Object.keys(_gutters.GutterSize)),

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
    '': _propTypes2["default"].any
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

    var classes = [_gridCss2["default"].grid, span && (0, _gridUtils.getGridSpanModifier)(span)];
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
    return _react2["default"].createElement("div", _extends({
      className: _reactStyles.css.apply(void 0, classes.concat([gutter && (0, _gutters.getGutterModifier)(_gridCss2["default"], gutter, _gridCss2["default"].modifiers && _gridCss2["default"].modifiers.gutter), className]))
    }, props), children);
  };

  Grid.propTypes = propTypes;
  Grid.defaultProps = defaultProps;
  exports["default"] = Grid;
});