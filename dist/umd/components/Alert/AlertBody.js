"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/Alert/alert.css.js", "@patternfly/react-icons", "../Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/Alert/alert.css.js"), require("@patternfly/react-icons"), require("../Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.alertCss, global.reactIcons, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _alertCss, _reactIcons, _Button) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

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

  var propTypes = {
    title: _propTypes2["default"].node,
    children: _propTypes2["default"].node,
    className: _propTypes2["default"].string,
    onClose: _propTypes2["default"].func,
    closeButtonAriaLabel: _propTypes2["default"].string
  };
  var defaultProps = {
    title: null,
    children: '',
    className: '',
    onClose: undefined,
    closeButtonAriaLabel: 'Close'
  };

  var AlertBody = function AlertBody(_ref) {
    var title = _ref.title,
        className = _ref.className,
        children = _ref.children,
        onClose = _ref.onClose,
        closeButtonAriaLabel = _ref.closeButtonAriaLabel,
        props = _objectWithoutProperties(_ref, ["title", "className", "children", "onClose", "closeButtonAriaLabel"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: className
    }), onClose && _react2["default"].createElement(_Button.Button, {
      variant: _Button.ButtonVariant.plain,
      onClick: onClose,
      "aria-label": closeButtonAriaLabel
    }, _react2["default"].createElement(_reactIcons.TimesIcon, null)), title && _react2["default"].createElement("h4", {
      className: (0, _reactStyles.css)(_alertCss2["default"].alertTitle)
    }, title), children && _react2["default"].createElement("p", null, children));
  };

  AlertBody.propTypes = propTypes;
  AlertBody.defaultProps = defaultProps;
  exports["default"] = AlertBody;
});