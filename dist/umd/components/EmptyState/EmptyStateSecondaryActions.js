"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/EmptyState/empty-state.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/EmptyState/empty-state.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.emptyStateCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _emptyStateCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _emptyStateCss2 = _interopRequireDefault(_emptyStateCss);

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

  var EmptyStateSecondaryActions = function EmptyStateSecondaryActions(_ref) {
    var children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["children", "className"]);

    return _react2["default"].createElement("div", _extends({
      className: (0, _reactStyles.css)(_emptyStateCss2["default"].emptyStateSecondary, className)
    }, props), children);
  };

  EmptyStateSecondaryActions.propTypes = {
    /** Additional classes added to the EmptyState */
    className: _propTypes2["default"].string,

    /** Content rendered inside the EmptyState */
    children: _propTypes2["default"].node,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  EmptyStateSecondaryActions.defaultProps = {
    className: '',
    children: null
  };
  exports["default"] = EmptyStateSecondaryActions;
});