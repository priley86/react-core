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

  var OptionsMenuItemsGroup = function OptionsMenuItemsGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        ariaLabel = _ref.ariaLabel;
    return _react2["default"].createElement("li", null, _react2["default"].createElement("ul", {
      className: className,
      "aria-label": ariaLabel
    }, children));
  };

  OptionsMenuItemsGroup.propTypes = {
    /** Content to be rendered in the Options menu items component */
    children: _propTypes2["default"].node,

    /** Classes applied to root element of the Options menu items group */
    className: _propTypes2["default"].string,

    /** Provides an accessible name for the Options menu items group */
    ariaLabel: _propTypes2["default"].string
  };
  OptionsMenuItemsGroup.defaultValues = {
    children: null,
    className: '',
    ariaLabel: ''
  };
  exports["default"] = OptionsMenuItemsGroup;
});