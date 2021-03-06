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
    /** Content rendered inside the main section of the login layout */
    children: _propTypes2["default"].node,

    /** Additional classes added to the login layout */
    className: _propTypes2["default"].string,

    /** Footer component (e.g. <LoginFooter />) */
    footer: _propTypes2["default"].node,

    /** Header component (e.g. <LoginHeader />) */
    header: _propTypes2["default"].node,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    footer: null,
    header: null
  };

  var Login = function Login(_ref) {
    var className = _ref.className,
        children = _ref.children,
        footer = _ref.footer,
        header = _ref.header,
        props = _objectWithoutProperties(_ref, ["className", "children", "footer", "header"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_loginCss2["default"].login, className)
    }), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_loginCss2["default"].loginContainer)
    }, header, _react2["default"].createElement("main", {
      className: (0, _reactStyles.css)(_loginCss2["default"].loginMain)
    }, children), footer));
  };

  Login.propTypes = propTypes;
  Login.defaultProps = defaultProps;
  exports["default"] = Login;
});