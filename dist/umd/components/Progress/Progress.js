"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "../../@patternfly/patternfly/components/Progress/progress.css.js", "@patternfly/react-styles", "prop-types", "./ProgressContainer", "../../helpers/util"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("../../@patternfly/patternfly/components/Progress/progress.css.js"), require("@patternfly/react-styles"), require("prop-types"), require("./ProgressContainer"), require("../../helpers/util"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.progressCss, global.reactStyles, global.propTypes, global.ProgressContainer, global.util);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _progressCss, _reactStyles, _propTypes, _ProgressContainer, _util) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.ProgressSize = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _progressCss2 = _interopRequireDefault(_progressCss);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ProgressContainer2 = _interopRequireDefault(_ProgressContainer);

  function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {
      default: obj
    };
  }

  function _typeof2(obj) {
    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof2 = function _typeof2(obj) {
        return typeof obj;
      };
    } else {
      _typeof2 = function _typeof2(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof2(obj);
  }

  function _typeof(obj) {
    if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
      _typeof = function _typeof(obj) {
        return _typeof2(obj);
      };
    } else {
      _typeof = function _typeof(obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
      };
    }

    return _typeof(obj);
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

  function _objectSpread(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};
      var ownKeys = Object.keys(source);

      if (typeof Object.getOwnPropertySymbols === 'function') {
        ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) {
          return Object.getOwnPropertyDescriptor(source, sym).enumerable;
        }));
      }

      ownKeys.forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    }

    return target;
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

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  function _possibleConstructorReturn(self, call) {
    if (call && (_typeof(call) === "object" || typeof call === "function")) {
      return call;
    }

    return _assertThisInitialized(self);
  }

  function _getPrototypeOf(o) {
    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
      return o.__proto__ || Object.getPrototypeOf(o);
    };
    return _getPrototypeOf(o);
  }

  function _assertThisInitialized(self) {
    if (self === void 0) {
      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
    }

    return self;
  }

  function _inherits(subClass, superClass) {
    if (typeof superClass !== "function" && superClass !== null) {
      throw new TypeError("Super expression must either be null or a function");
    }

    subClass.prototype = Object.create(superClass && superClass.prototype, {
      constructor: {
        value: subClass,
        writable: true,
        configurable: true
      }
    });
    if (superClass) _setPrototypeOf(subClass, superClass);
  }

  function _setPrototypeOf(o, p) {
    _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
      o.__proto__ = p;
      return o;
    };

    return _setPrototypeOf(o, p);
  }

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

  var ProgressSize = exports.ProgressSize = {
    sm: 'sm',
    md: 'md',
    lg: 'lg'
  };
  var propTypes = {
    /** Classname for progress component. */
    className: _propTypes2["default"].string,

    /** Size variant of progress. */
    size: _propTypes2["default"].oneOf(Object.values(ProgressSize)),

    /** Where the measure percent will be located. */
    measureLocation: _propTypes2["default"].oneOf(Object.values(_ProgressContainer.ProgressMeasureLocation)),

    /** Status variant of progress. */
    variant: _propTypes2["default"].oneOf(Object.values(_ProgressContainer.ProgressVariant)),

    /** Title above progress. */
    title: _propTypes2["default"].string,

    /** Text description of current progress value to display instead of
     * percentage. */
    label: _propTypes2["default"].node,

    /** Actual value of progress. */
    value: _propTypes2["default"].number,

    /** DOM id for progress component. */
    id: _propTypes2["default"].string,

    /** Minimal value of progress. */
    min: _propTypes2["default"].number,

    /** Maximum value of progress. */
    max: _propTypes2["default"].number,

    /** Accessible text description of current progress value, for when value is
     * not a percentage. Use with label. */
    valueText: _propTypes2["default"].string,

    /** Additional props are spread to the container <div> */
    '': _propTypes2["default"].any
  };
  var defaultProps = {
    className: '',
    measureLocation: _ProgressContainer.ProgressMeasureLocation.top,
    variant: _ProgressContainer.ProgressVariant.info,
    id: '',
    title: '',
    min: 0,
    max: 100,
    size: null,
    value: 0,
    valueText: null
  };

  var Progress =
  /*#__PURE__*/
  function (_Component) {
    _inherits(Progress, _Component);

    function Progress() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Progress);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Progress)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || (0, _util.getUniqueId)());

      return _this;
    }

    _createClass(Progress, [{
      key: "render",
      value: function render() {
        var _this$props = this.props,
            id = _this$props.id,
            className = _this$props.className,
            size = _this$props.size,
            value = _this$props.value,
            title = _this$props.title,
            label = _this$props.label,
            variant = _this$props.variant,
            measureLocation = _this$props.measureLocation,
            min = _this$props.min,
            max = _this$props.max,
            valueText = _this$props.valueText,
            props = _objectWithoutProperties(_this$props, ["id", "className", "size", "value", "title", "label", "variant", "measureLocation", "min", "max", "valueText"]);

        var additionalProps = _objectSpread({}, props, valueText ? {
          'aria-valuetext': valueText
        } : {
          'aria-describedby': "".concat(this.id, "-description")
        });

        var ariaProps = {
          'aria-describedby': "".concat(this.id, "-description"),
          'aria-valuemin': min,
          'aria-valuenow': value,
          'aria-valuemax': max
        };

        if (valueText) {
          ariaProps['aria-valuetext'] = valueText;
        }

        var scaledValue = Math.min(100, Math.max(0, Math.floor((value - min) / (max - min) * 100)));
        return _react2["default"].createElement("div", _extends({}, additionalProps, {
          className: (0, _reactStyles.css)(_progressCss2["default"].progress, (0, _reactStyles.getModifier)(_progressCss2["default"], variant, ''), (0, _reactStyles.getModifier)(_progressCss2["default"], measureLocation, ''), (0, _reactStyles.getModifier)(_progressCss2["default"], measureLocation === _ProgressContainer.ProgressMeasureLocation.inside ? ProgressSize.lg : size, ''), !title && (0, _reactStyles.getModifier)(_progressCss2["default"], 'singleline', ''), className),
          id: this.id,
          role: "progressbar"
        }), _react2["default"].createElement(_ProgressContainer2["default"], {
          parentId: this.id,
          value: scaledValue,
          title: title,
          label: label,
          variant: variant,
          measureLocation: measureLocation,
          ariaProps: ariaProps
        }));
      }
    }]);

    return Progress;
  }(_react.Component);

  Progress.propTypes = propTypes;
  Progress.defaultProps = defaultProps;
  exports["default"] = Progress;
});