"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "../../@patternfly/patternfly/components/DataList/data-list.css.js"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("../../@patternfly/patternfly/components/DataList/data-list.css.js"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.dataListCss);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _dataListCss) {
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

  var DataListContent = function DataListContent(_ref) {
    var className = _ref.className,
        children = _ref.children,
        id = _ref.id,
        isHidden = _ref.isHidden,
        ariaLabel = _ref['aria-label'],
        noPadding = _ref.noPadding,
        rowid = _ref.rowid,
        props = _objectWithoutProperties(_ref, ["className", "children", "id", "isHidden", "aria-label", "noPadding", "rowid"]);

    return _react2["default"].createElement("section", _extends({
      id: id,
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListExpandableContent, className),
      hidden: isHidden,
      "aria-label": ariaLabel
    }, props), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListExpandableContentBody, noPadding && _dataListCss2["default"].modifiers.noPadding)
    }, children));
  };

  DataListContent.propTypes = {
    /** Content rendered inside the DataList item */
    children: _propTypes2["default"].node,

    /** Additional classes added to the DataList cell */
    className: _propTypes2["default"].string,

    /** Identify the DataListContent item */
    id: _propTypes2["default"].string,

    /** Flag to show if the expanded content of the DataList item is visible */
    isHidden: _propTypes2["default"].bool,

    /** Flag to remove padding from the expandable content */
    noPadding: _propTypes2["default"].bool,

    /** Adds accessible text to the DataList toggle */
    'aria-label': _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the container <section> */
    '': _propTypes2["default"].any
  };
  DataListContent.defaultProps = {
    children: null,
    className: '',
    id: '',
    isHidden: false,
    noPadding: false
  };
  exports["default"] = DataListContent;
});