"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../../@patternfly/patternfly/components/Popover/popover.css.js", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../../@patternfly/patternfly/components/Popover/popover.css.js"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.popoverCss, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _popoverCss, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _popoverCss2 = _interopRequireDefault(_popoverCss);

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

  var PopoverFooter = function PopoverFooter(_ref) {
    var children = _ref.children,
        className = _ref.className,
        rest = _objectWithoutProperties(_ref, ["children", "className"]);

    return _react2["default"].createElement("footer", _extends({
      className: (0, _reactStyles.css)(_popoverCss2["default"].popoverFooter, className)
    }, rest), children);
  };

  var propTypes = {
    /** Additional classes added to the Popover Footer */
    className: _propTypes2["default"].string,

    /** Footer node */
    children: _propTypes2["default"].any,

    /** Additional props are spread to the container <footer> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: ''
  };
  exports["default"] = PopoverFooter;
});