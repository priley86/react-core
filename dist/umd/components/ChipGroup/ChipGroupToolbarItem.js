"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/ChipGroup/chip-group.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.chipGroupCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _chipGroupCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _chipGroupCss2 = _interopRequireDefault(_chipGroupCss);

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

  var ChipGroupToolbarItem = function ChipGroupToolbarItem(_ref) {
    var children = _ref.children,
        className = _ref.className,
        categoryName = _ref.categoryName,
        props = _objectWithoutProperties(_ref, ["children", "className", "categoryName"]);

    if (_react2["default"].Children.count(children)) {
      return _react2["default"].createElement("ul", _extends({
        className: (0, _reactStyles.css)(_chipGroupCss2["default"].chipGroup, _chipGroupCss2["default"].modifiers.toolbar)
      }, props), _react2["default"].createElement("li", null, _react2["default"].createElement("h4", {
        className: (0, _reactStyles.css)(_chipGroupCss2["default"].chipGroupLabel)
      }, categoryName), _react2["default"].createElement("ul", {
        className: (0, _reactStyles.css)(_chipGroupCss2["default"].chipGroup)
      }, children)));
    }

    return null;
  };

  ChipGroupToolbarItem.propTypes = {
    /**  Category name text */
    categoryName: _propTypes2["default"].string,

    /** Content rendered inside the chip text */
    children: _propTypes2["default"].node.isRequired,

    /** Additional classes added to the chip item */
    className: _propTypes2["default"].string
  };
  ChipGroupToolbarItem.defaultProps = {
    categoryName: '',
    children: null,
    className: ''
  };
  exports["default"] = ChipGroupToolbarItem;
});