"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../helpers/componentShape", "../../@patternfly/patternfly/components/Button/button.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../helpers/componentShape"), require("../../@patternfly/patternfly/components/Button/button.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.componentShape, global.buttonCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _componentShape, _buttonCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ButtonType = exports.ButtonVariant = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _buttonCss2 = _interopRequireDefault(_buttonCss);

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

  var ButtonVariant = exports.ButtonVariant = {
    primary: 'primary',
    secondary: 'secondary',
    tertiary: 'tertiary',
    danger: 'danger',
    link: 'link',
    plain: 'plain'
  };
  var ButtonType = exports.ButtonType = {
    button: 'button',
    submit: 'submit'
  };
  var propTypes = {
    /** content rendered inside the button */
    children: _propTypes2["default"].node,

    /** additional classes added to the button */
    className: _propTypes2["default"].string,

    /** Sets the base component to render. defaults to button */
    component: _componentShape.componentShape,

    /**  Adds active styling to button. */
    isActive: _propTypes2["default"].bool,

    /** Adds block styling to button */
    isBlock: _propTypes2["default"].bool,

    /** Disables the button and adds disabled styling */
    isDisabled: _propTypes2["default"].bool,

    /** Adds focus styling to the button */
    isFocus: _propTypes2["default"].bool,

    /** Adds hover styling to the button */
    isHover: _propTypes2["default"].bool,

    /** Adds inline styling to a link button */
    isInline: _propTypes2["default"].bool,

    /** Sets button type */
    type: _propTypes2["default"].oneOf(Object.values(ButtonType)),

    /** Adds button variant styles */
    variant: _propTypes2["default"].oneOf(Object.values(ButtonVariant)),

    /** Adds accessible text to the button. */
    'aria-label': _propTypes2["default"].string,

    /** Additional props are spread to the container <button> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: '',
    className: '',
    component: 'button',
    isActive: false,
    isBlock: false,
    isDisabled: false,
    isFocus: false,
    isHover: false,
    isInline: false,
    type: ButtonType.button,
    variant: ButtonVariant.primary,
    'aria-label': null
  };

  var Button = function Button(_ref) {
    var children = _ref.children,
        className = _ref.className,
        Component = _ref.component,
        isActive = _ref.isActive,
        isBlock = _ref.isBlock,
        isDisabled = _ref.isDisabled,
        isFocus = _ref.isFocus,
        isHover = _ref.isHover,
        isInline = _ref.isInline,
        variant = _ref.variant,
        type = _ref.type,
        props = _objectWithoutProperties(_ref, ["children", "className", "component", "isActive", "isBlock", "isDisabled", "isFocus", "isHover", "isInline", "variant", "type"]);

    var isButtonElement = Component === 'button';
    return _react2["default"].createElement(Component, _extends({}, props, {
      "aria-disabled": isButtonElement ? null : isDisabled,
      className: (0, _reactStyles.css)(_buttonCss2["default"].button, (0, _reactStyles.getModifier)(_buttonCss2["default"].modifiers, variant), isBlock && _buttonCss2["default"].modifiers.block, isDisabled && _buttonCss2["default"].modifiers.disabled, isActive && _buttonCss2["default"].modifiers.active, isFocus && _buttonCss2["default"].modifiers.focus, isHover && _buttonCss2["default"].modifiers.hover, isInline && variant === ButtonVariant.link && _buttonCss2["default"].modifiers.inline, className),
      disabled: isButtonElement ? isDisabled : null,
      tabIndex: isDisabled && !isButtonElement ? -1 : null,
      type: isButtonElement ? type : null
    }), children);
  };

  Button.propTypes = propTypes;
  Button.defaultProps = defaultProps;
  exports["default"] = Button;
});