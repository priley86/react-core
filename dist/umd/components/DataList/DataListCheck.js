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

  var DataListCheck = function DataListCheck(_ref) {
    var className = _ref.className,
        _onChange = _ref.onChange,
        isValid = _ref.isValid,
        isDisabled = _ref.isDisabled,
        isChecked = _ref.isChecked,
        checked = _ref.checked,
        props = _objectWithoutProperties(_ref, ["className", "onChange", "isValid", "isDisabled", "isChecked", "checked"]);

    return _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_dataListCss2["default"].dataListItemControl, className)
    }, _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)('pf-c-data-list__check')
    }, _react2["default"].createElement("input", _extends({}, props, {
      type: "checkbox",
      onChange: function onChange(event) {
        return _onChange(event.currentTarget.checked, event);
      },
      "aria-invalid": !isValid,
      disabled: isDisabled,
      checked: isChecked || checked
    }))));
  };

  DataListCheck.propTypes = {
    /** Additional classes added to the DataList item checkbox */
    className: _propTypes2["default"].string,

    /** Flag to show if the DataList checkbox selection is valid or invalid */
    isValid: _propTypes2["default"].bool,

    /** Flag to show if the DataList checkbox is disabled */
    isDisabled: _propTypes2["default"].bool,

    /** Flag to show if the DataList checkbox is checked */
    isChecked: _propTypes2["default"].bool,

    /** A callback for when the DataList checkbox selection changes */
    onChange: _propTypes2["default"].func,

    /** Aria-labelledby of the DataList checkbox */
    'aria-labelledby': _propTypes2["default"].string.isRequired,

    /** Additional props are spread to the <input> */
    '': _propTypes2["default"].any
  };
  DataListCheck.defaultProps = {
    className: '',
    isValid: true,
    isDisabled: false,
    isChecked: null,
    onChange: function onChange() {
      return undefined;
    }
  };
  exports["default"] = DataListCheck;
});