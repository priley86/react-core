"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Select/select.css.js", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Select/select.css.js"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.selectCss, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _selectCss, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _selectCss2 = _interopRequireDefault(_selectCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

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

  var propTypes = {
    /** Checkboxes within group */
    children: _propTypes2["default"].node,

    /** Additional classes added to the CheckboxSelectGroup control */
    className: _propTypes2["default"].string,

    /** Group label */
    label: _propTypes2["default"].string,

    /** Additional props are spread to the container <select> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: '',
    label: ''
  };

  var CheckboxSelectGroup = function CheckboxSelectGroup(_ref) {
    var children = _ref.children,
        className = _ref.className,
        label = _ref.label,
        titleId = _ref.titleId,
        props = _objectWithoutProperties(_ref, ["children", "className", "label", "titleId"]);

    return _react2["default"].createElement(_react2["default"].Fragment, null, _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_selectCss2["default"].selectMenuGroup, className)
    }), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_selectCss2["default"].selectMenuGroupTitle),
      id: titleId || '',
      "aria-hidden": true
    }, label), children));
  };

  CheckboxSelectGroup.propTypes = propTypes;
  CheckboxSelectGroup.defaultProps = defaultProps;
  exports["default"] = CheckboxSelectGroup;
});