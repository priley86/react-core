"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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
    /** Additional classes added to the Brand. */
    className: _propTypes2["default"].string,

    /** Attribute that specifies the URL of the image for the Brand. */
    src: _propTypes2["default"].string,

    /** Attribute that specifies the alt text of the image for the Brand. */
    alt: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <img> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    src: ''
  };

  var Brand = function Brand(_ref) {
    var className = _ref.className,
        src = _ref.src,
        alt = _ref.alt,
        props = _objectWithoutProperties(_ref, ["className", "src", "alt"]);

    return (
      /** the brand component currently contains no styling
       the 'pf-c-brand' string will be used for the className */
      _react2["default"].createElement("img", _extends({}, props, {
        className: (0, _reactStyles.css)('pf-c-brand', className),
        src: src,
        alt: alt
      }))
    );
  };

  Brand.propTypes = propTypes;
  Brand.defaultProps = defaultProps;
  exports["default"] = Brand;
});