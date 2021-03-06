"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TextListItemVariants = undefined;

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

  var TextListItemVariants = exports.TextListItemVariants = {
    li: 'li',
    dt: 'dt',
    dd: 'dd'
  };
  var propTypes = {
    /** The text list item component */
    component: _propTypes2["default"].oneOf(Object.values(TextListItemVariants)),

    /** Content rendered within the TextListItem */
    children: _propTypes2["default"].node,

    /** Additional classes added to the TextListItem */
    className: _propTypes2["default"].string,

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    component: 'li',
    children: null,
    className: ''
  };

  var TextListItem = function TextListItem(_ref) {
    var component = _ref.component,
        children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["component", "children", "className"]);

    var Component = TextListItemVariants[component] || 'li';
    return _react2["default"].createElement(Component, _extends({}, props, {
      "data-pf-content": true,
      className: (0, _reactStyles.css)(className)
    }), children);
  };

  TextListItem.propTypes = propTypes;
  TextListItem.defaultProps = defaultProps;
  exports["default"] = TextListItem;
});