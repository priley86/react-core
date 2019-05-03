"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-icons", "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js", "@patternfly/react-styles", "../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-icons"), require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"), require("@patternfly/react-styles"), require("../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactIcons, global.optionsMenuCss, global.reactStyles, global.util);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactIcons, _optionsMenuCss, _reactStyles, _util) {
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

  var OptionsMenuToggle = function OptionsMenuToggle(_ref) {
    var parentId = _ref.parentId,
        onToggle = _ref.onToggle,
        isOpen = _ref.isOpen,
        isPlain = _ref.isPlain,
        isHovered = _ref.isHovered,
        isActive = _ref.isActive,
        isFocused = _ref.isFocused,
        hideCaret = _ref.hideCaret,
        ariaLabel = _ref["aria-label"],
        ToggleTemplate = _ref.toggleTemplate,
        toggleTemplateProps = _ref.toggleTemplateProps;
    var template = ToggleTemplate && typeof ToggleTemplate === 'string' ? (0, _util.fillTemplate)(ToggleTemplate, toggleTemplateProps) : _react2["default"].createElement(ToggleTemplate, {
      toggleTemplateProps: toggleTemplateProps
    });
    return _react2["default"].createElement("button", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggle, isPlain && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'plain'), isHovered && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'hover'), isActive && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'active'), isFocused && (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'focus')),
      id: "".concat(parentId, "-toggle"),
      "aria-haspopup": "listbox",
      "aria-label": ariaLabel,
      "aria-expanded": isOpen,
      onClick: onToggle
    }, ToggleTemplate && (!isPlain ? _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggleText)
    }, template) : _react2["default"].createElement(_react2["default"].Fragment, null, template)), !hideCaret && _react2["default"].createElement(_reactIcons.CaretDownIcon, {
      "aria-hidden": true,
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggleIcon)
    }));
  };

  OptionsMenuToggle.propTypes = {
    /** Id of the parent Options menu component */
    parentId: _propTypes2["default"].string,

    /** Callback for when this Options menu is toggled */
    onToggle: _propTypes2["default"].func,

    /** Flag to indicate if menu is open */
    isOpen: _propTypes2["default"].bool,

    /** Flag to indicate if the button is plain */
    isPlain: _propTypes2["default"].bool,

    /** Forces display of the hover state of the Options menu */
    isHovered: _propTypes2["default"].bool,

    /** Forces display of the active state of the Options menu */
    isActive: _propTypes2["default"].bool,

    /** Forces display of the hover state of the Options menu */
    isFocused: _propTypes2["default"].bool,

    /** Content to be rendered in the Options menu toggle button */
    toggleTemplate: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].func]),

    /** Props to be passed to the Options menu toggle button template */
    toggleTemplateProps: _propTypes2["default"].object,

    /** hide the toggle caret */
    hideCaret: _propTypes2["default"].bool,

    /** Provides an accessible name for the button when an icon is used instead of text*/
    "aria-label": _propTypes2["default"].string
  };
  OptionsMenuToggle.defaultProps = {
    parentId: '',
    onToggle: Function.prototype,
    isOpen: false,
    isPlain: false,
    isHovered: false,
    isActive: false,
    isFocused: false,
    toggleTemplate: '',
    toggleTemplateProps: undefined,
    hideCaret: false,
    "aria-label": 'Options menu'
  };
  exports["default"] = OptionsMenuToggle;
});