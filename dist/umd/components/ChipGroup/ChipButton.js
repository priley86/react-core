"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "../Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("../Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _Button) {
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

  var ChipButton = function ChipButton(_ref) {
    var ariaLabel = _ref.ariaLabel,
        children = _ref.children,
        className = _ref.className,
        onClick = _ref.onClick,
        props = _objectWithoutProperties(_ref, ["ariaLabel", "children", "className", "onClick"]);

    return _react2["default"].createElement(_Button.Button, _extends({
      variant: "plain",
      "aria-label": ariaLabel,
      onClick: onClick,
      className: className
    }, props), children);
  };

  ChipButton.propTypes = {
    /** Aria label for chip button */
    ariaLabel: _propTypes2["default"].string,

    /** Content rendered inside the chip item */
    children: _propTypes2["default"].node,

    /** Additional classes added to the chip item */
    className: _propTypes2["default"].string,

    /** Function that is called when clicking on the chip button */
    onClick: _propTypes2["default"].func
  };
  ChipButton.defaultProps = {
    ariaLabel: 'close',
    children: null,
    className: '',
    onClick: function onClick() {}
  };
  exports["default"] = ChipButton;
});