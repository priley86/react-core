"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/List/list.css.js", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/List/list.css.js"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.listCss, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _listCss, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ListVariant = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _listCss2 = _interopRequireDefault(_listCss);

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

  var ListVariant = exports.ListVariant = {
    grid: 'grid',
    inline: 'inline'
  };
  var propTypes = {
    /** Anything that can be rendered inside of the list */
    children: _propTypes2["default"].node,

    /** Additional classes added to the list. */
    className: _propTypes2["default"].string,

    /** Adds list variant styles */
    variant: _propTypes2["default"].oneOf(Object.values(ListVariant)),

    /** Additional props are spread to the container <ul> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    variant: null
  };

  var List = function List(_ref) {
    var className = _ref.className,
        children = _ref.children,
        variant = _ref.variant,
        props = _objectWithoutProperties(_ref, ["className", "children", "variant"]);

    return _react2["default"].createElement("ul", _extends({}, props, {
      className: (0, _reactStyles.css)(_listCss2["default"].list, (0, _reactStyles.getModifier)(_listCss2["default"].modifiers, variant), className)
    }), children);
  };

  List.propTypes = propTypes;
  List.defaultProps = defaultProps;
  exports["default"] = List;
});