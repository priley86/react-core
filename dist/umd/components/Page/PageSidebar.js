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
    /** Additional classes added to the page sidebar */
    className: _propTypes2["default"].string,

    /** Component to render the side navigation (e.g. <Nav /> */
    nav: _propTypes2["default"].node,

    /** Programmatically manage if the side nav is shown, if isManagedSidebar is set to true in the Page component, this prop is managed */
    isNavOpen: _propTypes2["default"].bool,

    /** Additional props are spread to the container <aside> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    nav: null,
    isNavOpen: true
  };

  var PageSidebar = function PageSidebar(_ref) {
    var className = _ref.className,
        nav = _ref.nav,
        isNavOpen = _ref.isNavOpen,
        props = _objectWithoutProperties(_ref, ["className", "nav", "isNavOpen"]);

    return _react2["default"].createElement("div", _extends({
      id: "page-sidebar",
      className: (0, _reactStyles.css)(_pageCss2["default"].pageSidebar, isNavOpen && _pageCss2["default"].modifiers.expanded, !isNavOpen && _pageCss2["default"].modifiers.collapsed, className)
    }, props), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_pageCss2["default"].pageSidebarBody)
    }, nav));
  };

  PageSidebar.propTypes = propTypes;
  PageSidebar.defaultProps = defaultProps;
  exports["default"] = PageSidebar;
});