"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/Alert/alert.css.js", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/Alert/alert.css.js"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.alertCss, global.reactIcons);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _alertCss, _reactIcons) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.variantIcons = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _alertCss2 = _interopRequireDefault(_alertCss);

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

  var variantIcons = exports.variantIcons = {
    success: _reactIcons.CheckCircleIcon,
    danger: _reactIcons.ExclamationCircleIcon,
    warning: _reactIcons.ExclamationTriangleIcon,
    info: _reactIcons.InfoCircleIcon
  };
  var propTypes = {
    variant: _propTypes2["default"].oneOf(Object.keys(variantIcons)).isRequired,
    className: _propTypes2["default"].string
  };
  var defaultProps = {
    className: ''
  };

  var AlertIcon = function AlertIcon(_ref) {
    var variant = _ref.variant,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["variant", "className"]);

    var Icon = variantIcons[variant];
    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_alertCss2["default"].alertIcon, className)
    }), _react2["default"].createElement(Icon, null));
  };

  AlertIcon.propTypes = propTypes;
  AlertIcon.defaultProps = defaultProps;
  exports["default"] = AlertIcon;
});