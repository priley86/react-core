"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

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
    /** content rendered inside the Select Option Group */
    children: _propTypes2["default"].node,

    /** additional classes added to the Select Option */
    className: _propTypes2["default"].string,

    /** the label for the option */
    label: _propTypes2["default"].string.isRequired,

    /** flag indicating if the Option Group is disabled */
    isDisabled: _propTypes2["default"].bool,

    /** Additional props are spread to the container <optgroup> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    isDisabled: false
  };

  var FormSelectOptionGroup = function FormSelectOptionGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        label = _ref.label,
        isDisabled = _ref.isDisabled,
        props = _objectWithoutProperties(_ref, ["children", "className", "label", "isDisabled"]);

    return _react2["default"].createElement("optgroup", _extends({}, props, {
      disabled: !!isDisabled,
      className: className,
      label: label
    }), children);
  };

  FormSelectOptionGroup.propTypes = propTypes;
  FormSelectOptionGroup.defaultProps = defaultProps;
  exports["default"] = FormSelectOptionGroup;
});