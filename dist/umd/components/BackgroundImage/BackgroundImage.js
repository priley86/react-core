"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/BackgroundImage/background-image.css.js", "@patternfly/react-tokens"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/BackgroundImage/background-image.css.js"), require("@patternfly/react-tokens"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.backgroundImageCss, global.reactTokens);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _backgroundImageCss, _reactTokens) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultProps = exports.propTypes = exports.BackgroundImageSrc = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _backgroundImageCss2 = _interopRequireDefault(_backgroundImageCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _variableMap;

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
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

  var BackgroundImageSrc = exports.BackgroundImageSrc = {
    xs: 'xs',
    xs2x: 'xs2x',
    sm: 'sm',
    sm2x: 'sm2x',
    lg: 'lg',
    filter: 'filter'
  };
  var variableMap = (_variableMap = {}, _defineProperty(_variableMap, BackgroundImageSrc.xs, _reactTokens.c_background_image_BackgroundImage && _reactTokens.c_background_image_BackgroundImage.name), _defineProperty(_variableMap, BackgroundImageSrc.xs2x, _reactTokens.c_background_image_BackgroundImage_2x && _reactTokens.c_background_image_BackgroundImage_2x.name), _defineProperty(_variableMap, BackgroundImageSrc.sm, _reactTokens.c_background_image_BackgroundImage_sm && _reactTokens.c_background_image_BackgroundImage_sm.name), _defineProperty(_variableMap, BackgroundImageSrc.sm2x, _reactTokens.c_background_image_BackgroundImage_sm_2x && _reactTokens.c_background_image_BackgroundImage_sm_2x.name), _defineProperty(_variableMap, BackgroundImageSrc.lg, _reactTokens.c_background_image_BackgroundImage_lg && _reactTokens.c_background_image_BackgroundImage_lg.name), _variableMap);
  var propTypes = exports.propTypes = {
    /** Additional classes added to the background. */
    className: _propTypes2["default"].string,

    /** Override image styles using a string or BackgroundImageSrc */
    src: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].shape({
      xs: _propTypes2["default"].string,
      xs2x: _propTypes2["default"].string,
      sm: _propTypes2["default"].string,
      sm2x: _propTypes2["default"].string,
      lg: _propTypes2["default"].string,
      filter: _propTypes2["default"].string
    })]).isRequired
  };
  var defaultProps = exports.defaultProps = {
    className: ''
  };

  var BackgroundImage = function BackgroundImage(_ref) {
    var className = _ref.className,
        src = _ref.src,
        props = _objectWithoutProperties(_ref, ["className", "src"]); // Default string value to handle all sizes


    var variableOverrides = typeof src === 'string' ? Object.keys(BackgroundImageSrc).reduce(function (prev, size) {
      return _objectSpread({}, prev, _defineProperty({}, BackgroundImageSrc[size], src));
    }, {}) : src;

    var bgStyles = _reactStyles.StyleSheet.create({
      bgOverrides: "&.pf-c-background-image {\n      ".concat(Object.keys(variableOverrides).reduce(function (prev, size) {
        return "".concat(prev.length ? prev : '').concat(variableMap[size], ": url('").concat(variableOverrides[size], "');");
      }, {}), "\n    }")
    });

    return _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_backgroundImageCss2["default"].backgroundImage, bgStyles.bgOverrides, className)
    }, _react2["default"].createElement("svg", {
      xmlns: "http://www.w3.org/2000/svg",
      className: "svg-filter"
    }, _react2["default"].createElement("filter", {
      id: "image_overlay",
      width: "100%"
    }, _react2["default"].createElement("feColorMatrix", {
      type: "matrix",
      values: "1 0 0 0 0 1 0 0 0 0 1 0 0 0 0 0 0 0 1 0"
    }), _react2["default"].createElement("feComponentTransfer", {
      colorInterpolationFilters: "sRGB",
      result: "duotone"
    }, _react2["default"].createElement("feFuncR", {
      type: "table",
      tableValues: "0.086274509803922 0.43921568627451"
    }), _react2["default"].createElement("feFuncG", {
      type: "table",
      tableValues: "0.086274509803922 0.43921568627451"
    }), _react2["default"].createElement("feFuncB", {
      type: "table",
      tableValues: "0.086274509803922 0.43921568627451"
    }), _react2["default"].createElement("feFuncA", {
      type: "table",
      tableValues: "0 1"
    })))));
  };

  BackgroundImage.propTypes = propTypes;
  BackgroundImage.defaultProps = defaultProps;
  exports["default"] = BackgroundImage;
});