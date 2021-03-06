"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "../../@patternfly/patternfly/components/DataList/data-list.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("../../@patternfly/patternfly/components/DataList/data-list.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.dataListCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _dataListCss) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _dataListCss2 = _interopRequireDefault(_dataListCss);

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

  var DataListCell = function DataListCell(_ref) {
    var children = _ref.children,
        className = _ref.className,
        width = _ref.width,
        isFilled = _ref.isFilled,
        alignRight = _ref.alignRight,
        isIcon = _ref.isIcon,
        props = _objectWithoutProperties(_ref, ["children", "className", "width", "isFilled", "alignRight", "isIcon"]);

    return _react2["default"].createElement("div", _extends({
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListCell, width > 1 && (0, _reactStyles.getModifier)(_dataListCss2["default"], "flex_".concat(width), ''), !isFilled && _dataListCss2["default"].modifiers.noFill, alignRight && _dataListCss2["default"].modifiers.alignRight, isIcon && _dataListCss2["default"].modifiers.icon, className)
    }, props), children);
  };

  DataListCell.propTypes = {
    /** Content rendered inside the DataList cell */
    children: _propTypes2["default"].node,

    /** Additional classes added to the DataList cell */
    className: _propTypes2["default"].string,

    /** Width (from 1-5) to the DataList cell */
    width: _propTypes2["default"].oneOf([1, 2, 3, 4, 5]),

    /** Enables the body Content to fill the height of the card */
    isFilled: _propTypes2["default"].bool,

    /**  Aligns the cell content to the right of its parent. */
    alignRight: _propTypes2["default"].bool,

    /** Set to true if the cell content is an Icon */
    isIcon: _propTypes2["default"].bool,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  DataListCell.defaultProps = {
    children: null,
    className: '',
    width: 1,
    isFilled: true,
    alignRight: false,
    isIcon: false
  };
  exports["default"] = DataListCell;
});