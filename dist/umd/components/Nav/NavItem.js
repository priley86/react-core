"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Nav/nav.css.js", "@patternfly/react-styles", "prop-types", "./Nav"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Nav/nav.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("./Nav"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.navCss, global.reactStyles, global.propTypes, global.Nav);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _navCss, _reactStyles, _propTypes, _Nav) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _navCss2 = _interopRequireDefault(_navCss);

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
    /** Content rendered inside the nav item */
    children: _propTypes2["default"].node,

    /** Additional classes added to the nav item */
    className: _propTypes2["default"].string,

    /** Target navigation link */
    to: _propTypes2["default"].string,

    /** Flag indicating whether the item is active */
    isActive: _propTypes2["default"].bool,

    /** Group identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
    groupId: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),

    /** Item identifier, will be returned with the onToggle and onSelect callback passed to the Nav component */
    itemId: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].number]),

    /** If true prevents the default anchor link action to occur. Set to true if you want to handle navigation yourself. */
    preventDefault: _propTypes2["default"].bool,

    /** Callback for item click */
    onClick: _propTypes2["default"].func,

    /** Additional props are spread to the container <a> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    to: '',
    isActive: false,
    groupId: null,
    itemId: null,
    preventDefault: false,
    onClick: null
  };

  var NavItem = function NavItem(_ref) {
    var className = _ref.className,
        children = _ref.children,
        to = _ref.to,
        isActive = _ref.isActive,
        groupId = _ref.groupId,
        itemId = _ref.itemId,
        preventDefault = _ref.preventDefault,
        _onClick = _ref.onClick,
        rest = _objectWithoutProperties(_ref, ["className", "children", "to", "isActive", "groupId", "itemId", "preventDefault", "onClick"]);

    var defaultLink = _react2["default"].createElement(_Nav.NavContext.Consumer, null, function (context) {
      return _react2["default"].createElement("a", _extends({
        href: to,
        onClick: function onClick(e) {
          return context.onSelect(e, groupId, itemId, to, preventDefault, _onClick);
        },
        className: (0, _reactStyles.css)(_navCss2["default"].navLink, isActive && _navCss2["default"].modifiers.current, className),
        "aria-current": isActive ? 'page' : null
      }, rest), children);
    });

    var reactElement = _react2["default"].isValidElement(children);

    var clonedChild = _react2["default"].createElement(_Nav.NavContext.Consumer, null, function (context) {
      return _react2["default"].cloneElement(children, {
        onClick: function onClick(e) {
          return context.onSelect(e, groupId, itemId, to, preventDefault, _onClick);
        },
        className: (0, _reactStyles.css)(_navCss2["default"].navLink, isActive && _navCss2["default"].modifiers.current, className),
        'aria-current': isActive ? 'page' : null
      });
    });

    return _react2["default"].createElement("li", {
      className: (0, _reactStyles.css)(_navCss2["default"].navItem, className)
    }, reactElement ? clonedChild : defaultLink);
  };

  NavItem.propTypes = propTypes;
  NavItem.defaultProps = defaultProps;
  NavItem.componentType = 'NavItem';
  exports["default"] = NavItem;
});