"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-core", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-core"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactCore, global.reactIcons);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactCore, _reactIcons) {
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

  var PopoverCloseButton = function PopoverCloseButton(_ref) {
    var onClose = _ref.onClose,
        ariaLabel = _ref['aria-label'],
        rest = _objectWithoutProperties(_ref, ["onClose", "aria-label"]);

    return _react2["default"].createElement(_reactCore.Button, {
      onClick: onClose,
      variant: "plain",
      "aria-label": ariaLabel
    }, _react2["default"].createElement(_reactIcons.TimesIcon, null));
  };

  PopoverCloseButton.propTypes = {
    /** PopoverCloseButton onClose function */
    onClose: _propTypes2["default"].func.isRequired,

    /** Aria label for the Close button */
    'aria-label': _propTypes2["default"].string.isRequired
  };
  exports["default"] = PopoverCloseButton;
});