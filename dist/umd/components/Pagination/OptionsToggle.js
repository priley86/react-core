"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-icons", "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js", "@patternfly/react-styles", "../../helpers"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-icons"), require("../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js"), require("@patternfly/react-styles"), require("../../helpers"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactIcons, global.optionsMenuCss, global.reactStyles, global.helpers);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactIcons, _optionsMenuCss, _reactStyles, _helpers) {
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

  var OptionsToggle = function OptionsToggle(_ref) {
    var itemsTitle = _ref.itemsTitle,
        optionsToggle = _ref.optionsToggle,
        firstIndex = _ref.firstIndex,
        lastIndex = _ref.lastIndex,
        itemCount = _ref.itemCount,
        widgetId = _ref.widgetId,
        onToggle = _ref.onToggle,
        isOpen = _ref.isOpen,
        ToggleTemplate = _ref.toggleTemplate;
    return _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggle, (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'plain'), (0, _reactStyles.getModifier)(_optionsMenuCss2["default"], 'text'))
    }, _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggleText)
    }, typeof ToggleTemplate === 'string' ? (0, _helpers.fillTemplate)(ToggleTemplate, {
      firstIndex: firstIndex,
      lastIndex: lastIndex,
      itemCount: itemCount,
      itemsTitle: itemsTitle
    }) : _react2["default"].createElement(ToggleTemplate, {
      firstIndex: firstIndex,
      lastIndex: lastIndex,
      itemCount: itemCount,
      itemsTitle: itemsTitle
    })), _react2["default"].createElement("button", {
      className: (0, _reactStyles.css)(_optionsMenuCss2["default"].optionsMenuToggleButton),
      id: "".concat(widgetId, "-toggle"),
      "aria-haspopup": "listbox",
      "aria-labelledby": "".concat(widgetId, "-toggle ").concat(widgetId, "-label"),
      "aria-label": optionsToggle,
      "aria-expanded": isOpen,
      onClick: function onClick() {
        return onToggle(!isOpen);
      },
      type: "button"
    }, _react2["default"].createElement(_reactIcons.CaretDownIcon, null)));
  };

  OptionsToggle.propTypes = {
    itemsTitle: _propTypes2["default"].string,
    firstIndex: _propTypes2["default"].number,
    lastIndex: _propTypes2["default"].number,
    itemCount: _propTypes2["default"].number,
    widgetId: _propTypes2["default"].string,
    onToggle: _propTypes2["default"].func,
    isOpen: _propTypes2["default"].bool,
    toggleTemplate: _propTypes2["default"].oneOfType([_propTypes2["default"].string, _propTypes2["default"].func])
  };
  OptionsToggle.defaultProps = {
    itemsTitle: 'items',
    optionsToggle: 'Select',
    firstIndex: 0,
    lastIndex: 0,
    itemCount: 0,
    onToggle: function onToggle() {
      return undefined;
    },
    isOpen: false
  };
  exports["default"] = OptionsToggle;
});