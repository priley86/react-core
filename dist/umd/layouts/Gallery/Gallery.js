"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/layouts/Gallery/gallery.css.js", "../../styles/gutters"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/layouts/Gallery/gallery.css.js"), require("../../styles/gutters"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.galleryCss, global.gutters);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _galleryCss, _gutters) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _galleryCss2 = _interopRequireDefault(_galleryCss);

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
    /** content rendered inside the Gallery layout */
    children: _propTypes2["default"].any,

    /** additional classes added to the Gallery layout */
    className: _propTypes2["default"].string,

    /** Adds space between children. Options are sm, md or lg */
    gutter: _propTypes2["default"].oneOf(Object.keys(_gutters.GutterSize)),

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
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

    return _react2["default"].createElement("div", _extends({
      className: (0, _reactStyles.css)(_galleryCss2["default"].gallery, gutter && (0, _gutters.getGutterModifier)(_galleryCss2["default"], gutter, _galleryCss2["default"].modifiers.gutter), className)
    }, props), children);
  };

  Gallery.propTypes = propTypes;
  Gallery.defaultProps = defaultProps;
  exports["default"] = Gallery;
});