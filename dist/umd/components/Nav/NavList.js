"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "./NavVariants", "../../@patternfly/patternfly/components/Nav/nav.css.js", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("./NavVariants"), require("../../@patternfly/patternfly/components/Nav/nav.css.js"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.NavVariants, global.navCss, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _NavVariants, _navCss, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _navCss2 = _interopRequireDefault(_navCss);

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

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
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
    /** Indicates the list type. */
    variant: _propTypes2["default"].oneOf(Object.values(_NavVariants.NavVariants)),

    /** Children nodes */
    children: _propTypes2["default"].node,

    /** Additional classes added to the list */
    className: _propTypes2["default"].string,

    /** Additional props are spread to the container <ul> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    variant: 'default',
    children: null,
    className: ''
  };

  var NavList = function NavList(_ref) {
    var _variantStyle;

    var variant = _ref.variant,
        children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["variant", "children", "className"]);

    var variantStyle = (_variantStyle = {}, _defineProperty(_variantStyle, _NavVariants.NavVariants["default"], _navCss2["default"].navList), _defineProperty(_variantStyle, _NavVariants.NavVariants.simple, _navCss2["default"].navSimpleList), _defineProperty(_variantStyle, _NavVariants.NavVariants.horizontal, _navCss2["default"].navHorizontalList), _defineProperty(_variantStyle, _NavVariants.NavVariants.tertiary, _navCss2["default"].navTertiaryList), _variantStyle);
    return _react2["default"].createElement("ul", _extends({
      className: (0, _reactStyles.css)(variantStyle[variant], className)
    }, props), children);
  };

  NavList.propTypes = propTypes;
  NavList.defaultProps = defaultProps;
  NavList.componentType = 'NavList';
  exports["default"] = NavList;
});