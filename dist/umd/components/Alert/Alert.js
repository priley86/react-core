"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/Alert/alert.css.js", "../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js", "./AlertIcon", "../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/Alert/alert.css.js"), require("../../@patternfly/patternfly/utilities/Accessibility/accessibility.css.js"), require("./AlertIcon"), require("../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.alertCss, global.accessibilityCss, global.AlertIcon, global.util);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _alertCss, _accessibilityCss, _AlertIcon, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.AlertVariant = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _alertCss2 = _interopRequireDefault(_alertCss);

  var _accessibilityCss2 = _interopRequireDefault(_accessibilityCss);

  var _AlertIcon2 = _interopRequireDefault(_AlertIcon);

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

  var AlertVariant = exports.AlertVariant = {
    success: 'success',
    danger: 'danger',
    warning: 'warning',
    info: 'info'
  };
  var propTypes = {
    /** Adds Alert variant styles */
    variant: _propTypes2["default"].oneOf(Object.values(AlertVariant)).isRequired,

    /** Title of the Alert */
    title: _propTypes2["default"].node.isRequired,

    /** Action button to put in the Alert.  Should be <AlertActionLink> or <AlertActionCloseButton> */
    action: _propTypes2["default"].node,

    /** content rendered inside the Alert */
    children: _propTypes2["default"].node,

    /** additional classes added to the Alert */
    className: _propTypes2["default"].string,

    /** Adds accessible text to the Alert */
    'aria-label': _propTypes2["default"].string,

    /** Variant label text for screen readers */
    variantLabel: _propTypes2["default"].string,

    /** Additional props are spread to the container <div>  */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    'aria-label': undefined,
    action: null,
    children: '',
    className: '',
    variantLabel: null
  };

  var getDefaultAriaLabel = function getDefaultAriaLabel(variant) {
    return "".concat((0, _util.capitalize)(AlertVariant[variant]), " Alert");
  };

  var Alert = function Alert(_ref) {
    var variant = _ref.variant,
        variantLabel = _ref.variantLabel,
        _ref$ariaLabel = _ref['aria-label'],
        ariaLabel = _ref$ariaLabel === void 0 ? getDefaultAriaLabel(variant) : _ref$ariaLabel,
        action = _ref.action,
        title = _ref.title,
        children = _ref.children,
        className = _ref.className,
        props = _objectWithoutProperties(_ref, ["variant", "variantLabel", "aria-label", "action", "title", "children", "className"]);

    variantLabel = variantLabel || (0, _util.capitalize)(AlertVariant[variant]);

    var readerTitle = _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_accessibilityCss2["default"].screenReader)
    }, "".concat(variantLabel, " alert:")), title);

    var customClassName = (0, _reactStyles.css)(_alertCss2["default"].alert, (0, _reactStyles.getModifier)(_alertCss2["default"], variant, _alertCss2["default"].modifiers.info), className);
    return _react2["default"].createElement("div", _extends({}, props, {
      className: customClassName,
      "aria-label": ariaLabel
    }), _react2["default"].createElement(_AlertIcon2["default"], {
      variant: variant
    }), _react2["default"].createElement("h4", {
      className: (0, _reactStyles.css)(_alertCss2["default"].alertTitle)
    }, readerTitle), children && _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_alertCss2["default"].alertDescription)
    }, _react2["default"].createElement("p", null, children)), action && _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_alertCss2["default"].alertAction, className)
    }, _react2["default"].cloneElement(action, {
      title: title,
      variantLabel: variantLabel
    })));
  };

  Alert.propTypes = propTypes;
  Alert.defaultProps = defaultProps;
  exports["default"] = Alert;
});