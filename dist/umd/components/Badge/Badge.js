"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Badge/badge.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Badge/badge.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.badgeCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _badgeCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.defaultProps = exports.propTypes = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _badgeCss2 = _interopRequireDefault(_badgeCss);

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

  var propTypes = exports.propTypes = {
    /**  Adds styling to the badge to indicate it has been read */
    isRead: _propTypes2["default"].bool,

    /** content rendered inside the Badge */
    children: _propTypes2["default"].node,

    /** additional classes added to the Badge */
    className: _propTypes2["default"].string,

    /** Additional props are spread to the container <span> */
    '': _propTypes2["default"].any
  };
  var defaultProps = exports.defaultProps = {
    isRead: false,
    children: '',
    className: ''
  };

  var Badge = function Badge(_ref) {
    var isRead = _ref.isRead,
        className = _ref.className,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["isRead", "className", "children"]);

    return _react2["default"].createElement("span", _extends({}, props, {
      className: (0, _reactStyles.css)(_badgeCss2["default"].badge, isRead ? _badgeCss2["default"].modifiers.read : _badgeCss2["default"].modifiers.unread, className)
    }), children);
  };

  Badge.propTypes = propTypes;
  Badge.defaultProps = defaultProps;
  exports["default"] = Badge;
});