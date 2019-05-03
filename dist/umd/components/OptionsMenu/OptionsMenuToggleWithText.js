"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.optionsMenuCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _optionsMenuCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _optionsMenuCss2 = _interopRequireDefault(_optionsMenuCss);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var OptionsMenuToggleWithText = function OptionsMenuToggleWithText(_ref) {
    var parentId = _ref.parentId,
        toggleText = _ref.toggleText,
        toggleTextClassName = _ref.toggleTextClassName,
        toggleButtonContents = _ref.toggleButtonContents,
        toggleButtonContentsClassName = _ref.toggleButtonContentsClassName,
        onToggle = _ref.onToggle,
        isOpen = _ref.isOpen,
        isPlain = _ref.isPlain,
        isHovered = _ref.isHovered,
        isActive = _ref.isActive,
        isFocused = _ref.isFocused,
        ariaLabel = _ref["aria-label"];
    return _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggle, (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'text'), isPlain && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'plain'), isHovered && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'hover'), isActive && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'active'), isFocused && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'focus'))
    }, _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggleText, toggleTextClassName)
    }, toggleText), _react2["default"].createElement("button", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggleButton, toggleButtonContentsClassName),
      id: "".concat(parentId, "-toggle"),
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-expanded": isOpen,
      onClick: onToggle
    }, toggleButtonContents));
  };

  OptionsMenuToggleWithText.propTypes = {
    /** Id of the parent Options menu component */
    parentId: _propTypes2["default"].string,

    /** Content to be rendered inside the Options menu toggle as text or another non-interactive element*/
    toggleText: _propTypes2["default"].node.isRequired,

    /** classes to be added to the Options menu toggle text*/
    toggleTextClassName: _propTypes2["default"].string,

    /** Content to be rendered inside the Options menu toggle button */
    toggleButtonContents: _propTypes2["default"].node.isRequired,

    /** Classes to be added to the Options menu toggle button */
    toggleButtonContentsClassName: _propTypes2["default"].string,

    /** Callback for when this Options menu is toggled */
    onToggle: _propTypes2["default"].func,

    /** Flag to indicate if menu is open */
    isOpen: _propTypes2["default"].bool,

    /** Flag to indicate if the button is plain */
    isPlain: _propTypes2["default"].bool,

    /** Forces display of the hover state of the Options menu button */
    isHovered: _propTypes2["default"].bool,

    /** Forces display of the active state of the Options menu button */
    isActive: _propTypes2["default"].bool,

    /** Forces display of the hover state of the Options menu button */
    isFocused: _propTypes2["default"].bool,

    /** Provides an accessible name for the button when an icon is used instead of text */
    "aria-label": _propTypes2["default"].string
  };
  OptionsMenuToggleWithText.defaultProps = {
    parentId: '',
    toggleTextClassName: '',
    toggleButtonContentsClassName: '',
    onToggle: Function.prototype,
    isOpen: false,
    isPlain: false,
    isHovered: false,
    isActive: false,
    isFocused: false,
    "aria-label": 'Options menu'
  };
  exports["default"] = OptionsMenuToggleWithText;
});