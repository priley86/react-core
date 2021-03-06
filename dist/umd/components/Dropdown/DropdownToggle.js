"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-icons", "prop-types", "./Toggle", "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js", "@patternfly/react-styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-icons"), require("prop-types"), require("./Toggle"), require("../../@patternfly/patternfly/components/Dropdown/dropdown.css.js"), require("@patternfly/react-styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactIcons, global.propTypes, global.Toggle, global.dropdownCss, global.reactStyles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactIcons, _propTypes, _Toggle, _dropdownCss, _reactStyles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _Toggle2 = _interopRequireDefault(_Toggle);

  var _dropdownCss2 = _interopRequireDefault(_dropdownCss);

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

  var DropdownToggle = function DropdownToggle(_ref) {
    var children = _ref.children,
        IconComponent = _ref.iconComponent,
        splitButtonItems = _ref.splitButtonItems,
        props = _objectWithoutProperties(_ref, ["children", "iconComponent", "splitButtonItems"]);

    var toggle = _react2["default"].createElement(_Toggle2["default"], _extends({}, props, splitButtonItems && {
      isSplitButton: true,
      'aria-label': props['aria-label'] || 'Select'
    }), children && _react2["default"].createElement("span", {
      className: IconComponent && (0, _reactStyles.css)(_dropdownCss2["default"].dropdownToggleText)
    }, children), IconComponent && _react2["default"].createElement(IconComponent, {
      className: (0, _reactStyles.css)(children && _dropdownCss2["default"].dropdownToggleIcon)
    }));

    if (splitButtonItems) {
      return _react2["default"].createElement("div", {
        className: (0, _reactStyles.css)(_dropdownCss2["default"].dropdownToggle, _dropdownCss2["default"].modifiers.splitButton, props.isDisabled && _dropdownCss2["default"].modifiers.disabled)
      }, splitButtonItems, toggle);
    }

    return toggle;
  };

  DropdownToggle.propTypes = {
    /** HTML ID of dropdown toggle */
    id: _propTypes2["default"].string,

    /** Anything which can be rendered as dropdown toggle button */
    children: _propTypes2["default"].node,

    /** Classes applied to root element of dropdown toggle button */
    className: _propTypes2["default"].string,

    /** Flag to indicate if menu is opened */
    isOpen: _propTypes2["default"].bool,

    /** Callback called when toggle is clicked */
    onToggle: _propTypes2["default"].func,

    /** Element which wraps toggle */
    parentRef: _propTypes2["default"].any,

    /** Forces focus state */
    isFocused: _propTypes2["default"].bool,

    /** Forces hover state */
    isHovered: _propTypes2["default"].bool,

    /** Forces active state */
    isActive: _propTypes2["default"].bool,

    /** Display the toggle with no border or background */
    isPlain: _propTypes2["default"].bool,

    /** The icon to display for the toggle. Defaults to CaretDownIcon. Set to null to not show an icon. */
    iconComponent: _propTypes2["default"].func,

    /** Elements to display before the toggle button. When included, renders the toggle as a split button. */
    splitButtonItems: _propTypes2["default"].arrayOf(_propTypes2["default"].node),

    /** Accessible label for the dropdown toggle button */
    'aria-label': _propTypes2["default"].any,

    /** Additional props are spread to the container component */
    '': _propTypes2["default"].any
  };
  DropdownToggle.defaultProps = {
    id: '',
    children: null,
    className: '',
    isOpen: false,
    parentRef: null,
    isFocused: false,
    isHovered: false,
    isActive: false,
    isPlain: false,
    onToggle: Function.prototype,
    iconComponent: _reactIcons.CaretDownIcon
  };
  exports["default"] = DropdownToggle;
});