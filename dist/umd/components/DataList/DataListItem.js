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

  var DataListItem = function DataListItem(_ref) {
    var children = _ref.children,
        className = _ref.className,
        isExpanded = _ref.isExpanded,
        ariaLabelledBy = _ref['aria-labelledby'],
        props = _objectWithoutProperties(_ref, ["children", "className", "isExpanded", "aria-labelledby"]);

    return _react2["default"].createElement("li", _extends({
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListItem, isExpanded && _dataListCss2["default"].modifiers.expanded, className),
      "aria-labelledby": ariaLabelledBy
    }, props), _react2["default"].Children.map(children, function (child) {
      return _react2["default"].isValidElement(child) && _react2["default"].cloneElement(child, {
        rowid: ariaLabelledBy
      });
    }));
  };

  DataListItem.propTypes = {
    /** Flag to show if the expanded content of the DataList item is visible */
    isExpanded: _propTypes2["default"].bool,

    /** Content rendered inside the DataList item */
    children: _propTypes2["default"].node.isRequired,

    /** Additional classes added to the DataList item should be either <DataListItemRow> or <DataListContent> */
    className: _propTypes2["default"].string,

    /** Adds accessible text to the DataList item */
    'aria-labelledby': _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <li> */
    '': _propTypes2["default"].any
  };
  DataListItem.defaultProps = {
    isExpanded: false,
    className: ''
  };
  exports["default"] = DataListItem;
});