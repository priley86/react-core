"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@patternfly/react-styles", "@patternfly/react-icons", "../../@patternfly/patternfly/components/DataList/data-list.css.js", "../Button"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@patternfly/react-styles"), require("@patternfly/react-icons"), require("../../@patternfly/patternfly/components/DataList/data-list.css.js"), require("../Button"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.reactStyles, global.reactIcons, global.dataListCss, global.Button);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _reactStyles, _reactIcons, _dataListCss, _Button) {
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

  var DataListToggle = function DataListToggle(_ref) {
    var className = _ref.className,
        isExpanded = _ref.isExpanded,
        ariaControls = _ref['aria-controls'],
        ariaLabel = _ref['aria-label'],
        ariaLabelledBy = _ref['aria-labelledby'],
        rowid = _ref.rowid,
        id = _ref.id,
        props = _objectWithoutProperties(_ref, ["className", "isExpanded", "aria-controls", "aria-label", "aria-labelledby", "rowid", "id"]);

    return _react2["default"].createElement("div", _extends({
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListItemControl, className)
    }, props), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListToggle)
    }, _react2["default"].createElement(_Button.Button, {
      id: id,
      variant: _Button.ButtonVariant.plain,
      "aria-controls": ariaControls !== '' && ariaControls,
      "aria-label": ariaLabel,
      "aria-labelledby": ariaLabel !== 'Details' ? null : "".concat(rowid, " ").concat(id),
      "aria-expanded": isExpanded
    }, _react2["default"].createElement(_reactIcons.AngleRightIcon, null))));
  };

  DataListToggle.propTypes = {
    /** Additional classes added to the DataList cell */
    className: _propTypes2["default"].string,

    /** Flag to show if the expanded content of the DataList item is visible */
    isExpanded: _propTypes2["default"].bool,

    /** Identify the DataList toggle number */
    id: _propTypes2["default"].string.isRequired,

    /** Adds accessible text to the DataList toggle */
    'aria-labelledby': _propTypes2["default"].string,

    /** Adds accessible text to the DataList toggle */
    'aria-label': _propTypes2["default"].string,

    /** Allows users of some screen readers to shift focus to the controlled element. Should be used when the controlled contents are not adjacent to the toggle that controls them. */
    'aria-controls': _propTypes2["default"].string,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  DataListToggle.defaultProps = {
    'aria-controls': '',
    'aria-label': 'Details',
    'aria-labelledby': '',
    className: '',
    isExpanded: false
  };
  exports["default"] = DataListToggle;
});