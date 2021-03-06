"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/layouts/Split/split.css.js", "../../helpers/componentShape", "../../styles/gutters", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/layouts/Split/split.css.js"), require("../../helpers/componentShape"), require("../../styles/gutters"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.splitCss, global.componentShape, global.gutters, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _splitCss, _componentShape, _gutters, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _splitCss2 = _interopRequireDefault(_splitCss);

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
    /** Adds space between children. Options are sm, md or lg */
    gutter: _propTypes2["default"].oneOf(Object.keys(_gutters.GutterSize)),

    /** content rendered inside the Split layout */
    children: _propTypes2["default"].node,

    /** additional classes added to the Split layout */
    className: _propTypes2["default"].string,

    /** Sets the base component to render. defaults to div */
    component: _componentShape.componentShape,

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    gutter: null,
    className: '',
    children: null,
    component: 'div'
  };

  var Split = function Split(_ref) {
    var gutter = _ref.gutter,
        className = _ref.className,
        children = _ref.children,
        Component = _ref.component,
        props = _objectWithoutProperties(_ref, ["gutter", "className", "children", "component"]);

    return _react2["default"].createElement(Component, _extends({}, props, {
      className: (0, _reactStyles.css)(_splitCss2["default"].split, gutter && (0, _gutters.getGutterModifier)(_splitCss2["default"], gutter, _splitCss2["default"].modifiers.gutter), className)
    }), children);
  };

  Split.propTypes = propTypes;
  Split.defaultProps = defaultProps;
  exports["default"] = Split;
});