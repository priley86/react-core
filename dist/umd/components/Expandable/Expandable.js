"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "prop-types", "react", "../../@patternfly/patternfly/components/Expandable/expandable.css.js", "@patternfly/react-styles", "@patternfly/react-icons"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("prop-types"), require("react"), require("../../@patternfly/patternfly/components/Expandable/expandable.css.js"), require("@patternfly/react-styles"), require("@patternfly/react-icons"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.propTypes, global.react, global.expandableCss, global.reactStyles, global.reactIcons);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _propTypes, _react, _expandableCss, _reactStyles, _reactIcons) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.Expandable = undefined;

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var React = _interopRequireWildcard(_react);

  var _expandableCss2 = _interopRequireDefault(_expandableCss);

  function _interopRequireWildcard(obj) {
    if (obj && obj.__esModule) {
      return obj;
    } else {
      var newObj = {};

      if (obj != null) {
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {};

            if (desc.get || desc.set) {
              Object.defineProperty(newObj, key, desc);
            } else {
              newObj[key] = obj[key];
            }
          }
        }
      }

      newObj.default = obj;
      return newObj;
    }
  }

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

  var defaultProps = {
    className: '',
    isExpanded: false,
    toggleText: '',
    onToggle: function onToggle() {},
    isFocused: false,
    isHovered: false,
    isActive: false
  };

  var Expandable = exports.Expandable = function Expandable(_ref) {
    var className = _ref.className,
        children = _ref.children,
        isExpanded = _ref.isExpanded,
        toggleText = _ref.toggleText,
        onToggle = _ref.onToggle,
        isFocused = _ref.isFocused,
        isActive = _ref.isActive,
        isHovered = _ref.isHovered,
        props = _objectWithoutProperties(_ref, ["className", "children", "isExpanded", "toggleText", "onToggle", "isFocused", "isActive", "isHovered"]);

    return React.createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_expandableCss2["default"].expandable, isExpanded && _expandableCss2["default"].modifiers.expanded, className)
    }), React.createElement("button", {
      className: (0, _reactStyles.css)(_expandableCss2["default"].expandableToggle, isFocused && _expandableCss2["default"].modifiers.focus, isHovered && _expandableCss2["default"].modifiers.hover, isActive && _expandableCss2["default"].modifiers.active),
      "aria-expanded": isExpanded,
      onClick: onToggle
    }, React.createElement(_reactIcons.AngleRightIcon, {
      className: (0, _reactStyles.css)(_expandableCss2["default"].expandableToggleIcon),
      "aria-hidden": true
    }), React.createElement("span", null, toggleText)), React.createElement("div", {
      className: (0, _reactStyles.css)(_expandableCss2["default"].expandableContent),
      hidden: !isExpanded
    }, children));
  };

  Expandable.propTypes = {
    children: _propTypes2["default"].any.isRequired,
    className: _propTypes2["default"].string,
    isExpanded: _propTypes2["default"].bool,
    toggleText: _propTypes2["default"].string,
    isFocused: _propTypes2["default"].bool,
    isHovered: _propTypes2["default"].bool,
    isActive: _propTypes2["default"].bool
  };
  Expandable.defaultProps = defaultProps;
  exports["default"] = Expandable;
});