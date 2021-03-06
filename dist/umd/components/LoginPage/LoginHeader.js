"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Login/login.css.js", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Login/login.css.js"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.loginCss, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _loginCss, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _loginCss2 = _interopRequireDefault(_loginCss);

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
    /** Content rendered inside the header of the login layout */
    children: _propTypes2["default"].node,

    /** Additional classes added to the login header */
    className: _propTypes2["default"].string,

    /** Header Brand component (e.g. <LoginHeader />) */
    headerBrand: _propTypes2["default"].node,

    /** Additional props are spread to the container <header> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    headerBrand: null
  };

  var LoginHeader = function LoginHeader(_ref) {
    var className = _ref.className,
        children = _ref.children,
        headerBrand = _ref.headerBrand,
        props = _objectWithoutProperties(_ref, ["className", "children", "headerBrand"]);

    return _react2["default"].createElement("header", _extends({
      className: (0, _reactStyles.css)(_loginCss2["default"].loginHeader, className)
    }, props), headerBrand, children);
  };

  LoginHeader.propTypes = propTypes;
  LoginHeader.defaultProps = defaultProps;
  exports["default"] = LoginHeader;
});