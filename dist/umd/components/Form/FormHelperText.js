"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "@patternfly/react-styles", "../../@patternfly/patternfly/components/Form/form.css.js", "prop-types", "react"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/Form/form.css.js"), require("prop-types"), require("react"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.reactStyles, global.formCss, global.propTypes, global.react);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _reactStyles, _formCss, _propTypes, _react) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _formCss2 = _interopRequireDefault(_formCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react2 = _interopRequireDefault(_react);

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
    /** Content rendered inside the Helper Text Item */
    children: _propTypes2["default"].node,

    /** Adds error styling to the Helper Text  * */
    isError: _propTypes2["default"].bool,

    /** Hides the helper text * */
    isHidden: _propTypes2["default"].bool,

    /** Additional classes added to the Helper Text  Item  */
    className: _propTypes2["default"].string,

    /** Additional props are spread to the container <p> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    isError: false,
    isHidden: true,
    className: ''
  };

  var FormHelperText = function FormHelperText(_ref) {
    var className = _ref.className,
        isError = _ref.isError,
        isHidden = _ref.isHidden,
        children = _ref.children,
        props = _objectWithoutProperties(_ref, ["className", "isError", "isHidden", "children"]);

    return _react2["default"].createElement("p", _extends({
      className: (0, _reactStyles.css)(_formCss2["default"].formHelperText, (0, _reactStyles.getModifier)(_formCss2["default"], isError && 'error'), (0, _reactStyles.getModifier)(_formCss2["default"], isHidden && 'hidden'), className)
    }, props), children);
  };

  FormHelperText.propTypes = propTypes;
  FormHelperText.defaultProps = defaultProps;
  exports["default"] = FormHelperText;
});