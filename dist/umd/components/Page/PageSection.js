"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Page/page.css.js", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Page/page.css.js"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.pageCss, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _pageCss, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.PageSectionVariants = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _pageCss2 = _interopRequireDefault(_pageCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var PageSectionVariants = exports.PageSectionVariants = {
    "default": 'default',
    light: 'light',
    dark: 'dark',
    darker: 'darker'
  };
  var propTypes = {
    /** Content rendered inside the section */
    children: _propTypes2["default"].node,

    /** Additional classes added to the section */
    className: _propTypes2["default"].string,

    /** Section background color variant */
    variant: _propTypes2["default"].oneOf(Object.values(PageSectionVariants)),

    /** Modifies a main page section to have no padding */
    noPadding: _propTypes2["default"].bool,

    /** Modifies a main page section to have no padding on mobile */
    noPaddingMobile: _propTypes2["default"].bool,

    /** Additional props are spread to the container <section> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    variant: 'default',
    noPadding: false,
    noPaddingMobile: false
  };

  var PageSection = function PageSection(_ref) {
    var _variantStyle;

    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        noPadding = _ref.noPadding,
        noPaddingMobile = _ref.noPaddingMobile,
        props = _objectWithoutProperties(_ref, ["className", "children", "variant", "noPadding", "noPaddingMobile"]);

    var variantStyle = (_variantStyle = {}, _defineProperty(_variantStyle, PageSectionVariants["default"], ''), _defineProperty(_variantStyle, PageSectionVariants.light, _pageCss2["default"].modifiers.light), _defineProperty(_variantStyle, PageSectionVariants.dark, _pageCss2["default"].modifiers.dark_200), _defineProperty(_variantStyle, PageSectionVariants.darker, _pageCss2["default"].modifiers.dark_100), _variantStyle);
    return _react2["default"].createElement("section", _extends({}, props, {
      className: (0, _reactStyles.css)(_pageCss2["default"].pageMainSection, noPadding && _pageCss2["default"].modifiers.noPadding, noPaddingMobile && _pageCss2["default"].modifiers.noPaddingMobile, variantStyle[variant], className)
    }), children);
  };

  PageSection.propTypes = propTypes;
  PageSection.defaultProps = defaultProps;
  exports["default"] = PageSection;
});