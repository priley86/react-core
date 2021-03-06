"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../Title", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Login/login.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../Title"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Login/login.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Title, global.reactStyles, global.loginCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _Title, _reactStyles, _loginCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _loginCss2 = _interopRequireDefault(_loginCss);

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
    /** Content rendered inside the Login Main Header */
    children: _propTypes2["default"].node,

    /** Additional classes added to the Login Main Header */
    className: _propTypes2["default"].string,

    /** Title for the Login Main Header */
    title: _propTypes2["default"].string,

    /** Subtitle that contains the Text, URL, and URL Text for the Login Main Header */
    subtitle: _propTypes2["default"].node,

    /** Additional props are spread to the container <header> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    title: '',
    subtitle: ''
  };

  var LoginMainHeader = function LoginMainHeader(_ref) {
    var children = _ref.children,
        className = _ref.className,
        title = _ref.title,
        subtitle = _ref.subtitle,
        props = _objectWithoutProperties(_ref, ["children", "className", "title", "subtitle"]);

    return _react2["default"].createElement("header", _extends({
      className: (0, _reactStyles.css)(_loginCss2["default"].loginMainHeader, className)
    }, props), title && _react2["default"].createElement(_Title.Title, {
      headingLevel: "h2",
      size: "3xl"
    }, title), subtitle && _react2["default"].createElement("p", {
      className: (0, _reactStyles.css)(_loginCss2["default"].loginMainHeaderDesc)
    }, subtitle), children);
  };

  LoginMainHeader.propTypes = propTypes;
  LoginMainHeader.defaultProps = defaultProps;
  exports["default"] = LoginMainHeader;
});