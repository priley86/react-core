"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Progress/progress.css.js", "@patternfly/react-styles", "prop-types"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Progress/progress.css.js"), require("@patternfly/react-styles"), require("prop-types"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.progressCss, global.reactStyles, global.propTypes);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _progressCss, _reactStyles, _propTypes) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _progressCss2 = _interopRequireDefault(_progressCss);

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
    /** What should be rendered inside progress bar. */
    children: _propTypes2["default"].node,

    /** Additional classes for Progres bar. */
    className: _propTypes2["default"].string,

    /** Actual progress value. */
    value: _propTypes2["default"].number.isRequired,

    /** Minimal value of progress. */
    ariaProps: _propTypes2["default"].object.isRequired,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    children: null,
    className: ''
  };

  var ProgressBar = function ProgressBar(_ref) {
    var ariaProps = _ref.ariaProps,
        className = _ref.className,
        children = _ref.children,
        value = _ref.value,
        props = _objectWithoutProperties(_ref, ["ariaProps", "className", "children", "value"]);

    return _react2["default"].createElement("div", _extends({}, props, {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressBar, className)
    }, ariaProps), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressIndicator),
      style: {
        width: "".concat(value, "%")
      }
    }, _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressMeasure)
    }, children)));
  };

  ProgressBar.propTypes = propTypes;
  ProgressBar.defaultProps = defaultProps;
  exports["default"] = ProgressBar;
});