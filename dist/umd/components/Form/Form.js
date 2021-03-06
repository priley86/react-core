"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Form/form.css.js", "prop-types", "@patternfly/react-styles", "./FormContext"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Form/form.css.js"), require("prop-types"), require("@patternfly/react-styles"), require("./FormContext"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.formCss, global.propTypes, global.reactStyles, global.FormContext);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _formCss, _propTypes, _reactStyles, _FormContext) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _formCss2 = _interopRequireDefault(_formCss);

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
    /** Anything that can be rendered as Form content. */
    children: _propTypes2["default"].node,

    /** Additional classes added to the Form. */
    className: _propTypes2["default"].string,

    /** Sets the Form to horizontal. */
    isHorizontal: _propTypes2["default"].bool,

    /** Additional props are spread to the container <form> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    isHorizontal: false
  };

  var Form = function Form(_ref) {
    var className = _ref.className,
        children = _ref.children,
        isHorizontal = _ref.isHorizontal,
        props = _objectWithoutProperties(_ref, ["className", "children", "isHorizontal"]);

    return _react2["default"].createElement("form", _extends({
      noValidate: true
    }, props, {
      className: (0, _reactStyles.css)(_formCss2["default"].form, isHorizontal && _formCss2["default"].modifiers.horizontal, className)
    }), _react2["default"].createElement(_FormContext.FormContext.Provider, {
      value: {
        isHorizontal: isHorizontal
      }
    }, children));
  };

  Form.propTypes = propTypes;
  Form.defaultProps = defaultProps;
  exports["default"] = Form;
});