"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js", "prop-types", "@patternfly/react-styles", "../../helpers/componentShape"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Breadcrumb/breadcrumb.css.js"), require("prop-types"), require("@patternfly/react-styles"), require("../../helpers/componentShape"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.breadcrumbCss, global.propTypes, global.reactStyles, global.componentShape);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _breadcrumbCss, _propTypes, _reactStyles, _componentShape) {
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
    /** Content rendered inside the breadcrumb title. */
    children: _propTypes2["default"].node,

    /** Additional classes added to the breadcrumb item. */
    className: _propTypes2["default"].string,

    /** HREF for breadcrumb link. */
    to: _propTypes2["default"].string,

    /** Target for breadcrumb link. */
    target: _propTypes2["default"].string,

    /** Sets the base component to render. Defaults to <a> */
    component: _componentShape.componentShape,

    /** Additional props are spread to the container <li> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    to: null,
    target: null,
    component: 'a'
  };

  var BreadcrumbHeading = function BreadcrumbHeading(_ref) {
    var className = _ref.className,
        children = _ref.children,
        to = _ref.to,
        target = _ref.target,
        Component = _ref.component,
        props = _objectWithoutProperties(_ref, ["className", "children", "to", "target", "component"]);

    return _react2["default"].createElement("li", _extends({}, props, {
      className: (0, _reactStyles.css)(_breadcrumbCss2["default"].breadcrumbItem, className)
    }), _react2["default"].createElement("h1", {
      className: (0, _reactStyles.css)(_breadcrumbCss2["default"].breadcrumbHeading)
    }, to && _react2["default"].createElement(Component, {
      href: to,
      target: target,
      className: (0, _reactStyles.css)(_breadcrumbCss2["default"].breadcrumbLink, _breadcrumbCss2["default"].modifiers.current),
      "aria-current": "page"
    }, children), !to && _react2["default"].createElement(_react2["default"].Fragment, null, children)));
  };

  BreadcrumbHeading.propTypes = propTypes;
  BreadcrumbHeading.defaultProps = defaultProps;
  exports["default"] = BreadcrumbHeading;
});