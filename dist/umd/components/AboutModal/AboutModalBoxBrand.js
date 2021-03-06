"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/AboutModalBox/about-modal-box.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.aboutModalBoxCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _aboutModalBoxCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _aboutModalBoxCss2 = _interopRequireDefault(_aboutModalBoxCss);

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
    /** additional classes added to the About Modal Brand */
    className: _propTypes2["default"].string,

    /** the URL of the image for the Brand. */
    src: _propTypes2["default"].string,

    /** the alternate text of the Brand image. */
    alt: _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    src: ''
  };

  var AboutModalBoxBrand = function AboutModalBoxBrand(_ref) {
    var className = _ref.className,
        src = _ref.src,
        alt = _ref.alt,
        props = _objectWithoutProperties(_ref, ["className", "src", "alt"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_aboutModalBoxCss2["default"].aboutModalBoxBrand, className)
    }), _react2["default"].createElement("img", {
      className: (0, _reactStyles.css)(_aboutModalBoxCss2["default"].aboutModalBoxBrandImage),
      src: src,
      alt: alt
    }));
  };

  AboutModalBoxBrand.propTypes = propTypes;
  AboutModalBoxBrand.defaultProps = defaultProps;
  exports["default"] = AboutModalBoxBrand;
});