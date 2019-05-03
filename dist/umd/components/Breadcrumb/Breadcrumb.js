"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js", "prop-types", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js"), require("prop-types"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.breadcrumbCss, global.propTypes, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _breadcrumbCss, _propTypes, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _breadcrumbCss2 = _interopRequireDefault(_breadcrumbCss);

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
    /** Children nodes be rendered to the BreadCrumb. Should be of type BreadCrumbItem. */
    children: _propTypes2["default"].node,

    /** Additional classes added to the breadcrumb nav. */
    className: _propTypes2["default"].string,

    /** Aria-label added to the breadcrumb nav. */
    'aria-label': _propTypes2["default"].string,

    /** Additional props are spread to the container <nav> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    'aria-label': 'Breadcrumb'
  };

  var Breadcrumb = function Breadcrumb(_ref) {
    var className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["className", "children"]);

    return _react2["default"].createElement("nav", _extends({}, props, {
      className: (0, _reactStyles.css)(_breadcrumbCss2["default"].breadcrumb, className)
    }), _react2["default"].createElement("ol", {
      className: (0, _reactStyles.css)(_breadcrumbCss2["default"].breadcrumbList)
    }, children));
  };

  Breadcrumb.propTypes = propTypes;
  Breadcrumb.defaultProps = defaultProps;
  exports["default"] = Breadcrumb;
});