"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Progress/progress.css.js", "@patternfly/react-styles", "prop-types", "@patternfly/react-icons", "./ProgressBar"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Progress/progress.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("@patternfly/react-icons"), require("./ProgressBar"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.progressCss, global.reactStyles, global.propTypes, global.reactIcons, global.ProgressBar);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _progressCss, _reactStyles, _propTypes, _reactIcons, _ProgressBar) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProgressVariant = exports.ProgressMeasureLocation = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _progressCss2 = _interopRequireDefault(_progressCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ProgressBar2 = _interopRequireDefault(_ProgressBar);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  var _variantToIcon;

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  var ProgressMeasureLocation = exports.ProgressMeasureLocation = {
    outside: 'outside',
    inside: 'inside',
    top: 'top',
    none: 'none'
  };
  var ProgressVariant = exports.ProgressVariant = {
    danger: 'danger',
    success: 'success',
    info: 'info'
  };
  var propTypes = {
    /** Properties needed for aria support */
    ariaProps: _propTypes2["default"].object.isRequired,

    /** Progress component DOM ID. */
    parentId: _propTypes2["default"].string.isRequired,

    /** Progress title. */
    title: _propTypes2["default"].string,

    /** Label to indicate what progress is showing. */
    label: _propTypes2["default"].node,

    /** Type of progress status. */
    variant: _propTypes2["default"].oneOf(Object.values(ProgressVariant)),

    /** Location of progress value. */
    measureLocation: _propTypes2["default"].oneOf(Object.values(ProgressMeasureLocation)),

    /** Actual progress value. */
    value: _propTypes2["default"].number.isRequired
  };
  var defaultProps = {
    variant: ProgressVariant.info,
    measureLocation: ProgressMeasureLocation.Top,
    title: ''
  };
  var variantToIcon = (_variantToIcon = {}, _defineProperty(_variantToIcon, ProgressVariant.danger, _reactIcons.TimesCircleIcon), _defineProperty(_variantToIcon, ProgressVariant.success, _reactIcons.CheckCircleIcon), _variantToIcon);

  var ProgressContainer = function ProgressContainer(_ref) {
    var ariaProps = _ref.ariaProps,
        value = _ref.value,
        title = _ref.title,
        parentId = _ref.parentId,
        label = _ref.label,
        variant = _ref.variant,
        measureLocation = _ref.measureLocation;
    var StatusIcon = variantToIcon.hasOwnProperty(variant) && variantToIcon[variant];
    return _react2["default"].createElement(_react.Fragment, null, _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressDescription),
      id: "".concat(parentId, "-description")
    }, title), _react2["default"].createElement("div", {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressStatus)
    }, (measureLocation === ProgressMeasureLocation.top || measureLocation === ProgressMeasureLocation.outside) && _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressMeasure)
    }, label || "".concat(value, "%")), variantToIcon.hasOwnProperty(variant) && _react2["default"].createElement("span", {
      className: (0, _reactStyles.css)(_progressCss2["default"].progressStatusIcon)
    }, _react2["default"].createElement(StatusIcon, null))), _react2["default"].createElement(_ProgressBar2["default"], {
      ariaProps: ariaProps,
      value: value
    }, measureLocation === ProgressMeasureLocation.inside && "".concat(value, "%")));
  };

  ProgressContainer.propTypes = propTypes;
  ProgressContainer.defaultProps = defaultProps;
  exports["default"] = ProgressContainer;
});