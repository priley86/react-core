"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "prop-types", "@tippy.js/react", "../../@patternfly/patternfly/components/Tooltip/tooltip.css.js", "@patternfly/react-styles", "./TooltipArrow", "./TooltipContent", "../../helpers/constants", "@patternfly/react-tokens", "./styles"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("prop-types"), require("@tippy.js/react"), require("../../@patternfly/patternfly/components/Tooltip/tooltip.css.js"), require("@patternfly/react-styles"), require("./TooltipArrow"), require("./TooltipContent"), require("../../helpers/constants"), require("@patternfly/react-tokens"), require("./styles"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.propTypes, global.react, global.tooltipCss, global.reactStyles, global.TooltipArrow, global.TooltipContent, global.constants, global.reactTokens, global.styles);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _propTypes, _react3, _tooltipCss, _reactStyles, _TooltipArrow, _TooltipContent, _constants, _reactTokens, _styles) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });
  exports.TooltipPosition = undefined;

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _react4 = _interopRequireDefault(_react3);

  var _tooltipCss2 = _interopRequireDefault(_tooltipCss);

  var _TooltipArrow2 = _interopRequireDefault(_TooltipArrow);

  var _TooltipContent2 = _interopRequireDefault(_TooltipContent);

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

  (0, _styles.tippyStyles)();
  var TooltipPosition = exports.TooltipPosition = {
    top: 'top',
    bottom: 'bottom',
    left: 'left',
    right: 'right'
  };
  var propTypes = {
    /** Tooltip position */
    position: _propTypes2["default"].oneOf(Object.keys(TooltipPosition).map(function (key) {
      return TooltipPosition[key];
    })),

    /** Tooltip trigger: click, mouseenter, focus */
    trigger: _propTypes2["default"].string,

    /** If true, tries to keep the tooltip in view by flipping it if necessary */
    enableFlip: _propTypes2["default"].bool,

    /** Tooltip additional class */
    className: _propTypes2["default"].string,

    /** Tooltip content */
    content: _propTypes2["default"].node.isRequired,

    /** The reference element to which the tooltip is relatively placed to */
    children: _propTypes2["default"].element.isRequired,

    /** Delay in ms before the tooltip appears */
    entryDelay: _propTypes2["default"].number,

    /** Delay in ms before the tooltip disappears */
    exitDelay: _propTypes2["default"].number,

    /** The element to append the tooltip to, defaults to body */
    appendTo: _propTypes2["default"].oneOfType([_propTypes2["default"].element, _propTypes2["default"].func]),

    /** z-index of the tooltip */
    zIndex: _propTypes2["default"].number,

    /** Maximum width of the tooltip (default 12.5rem) */
    maxWidth: _propTypes2["default"].string
  };
  var defaultProps = {
    position: 'top',
    trigger: 'mouseenter focus',
    enableFlip: true,
    className: null,
    entryDelay: 500,
    exitDelay: 500,
    appendTo: function appendTo() {
      return document.body;
    },
    zIndex: 9999,
    maxWidth: _reactTokens.c_tooltip_MaxWidth && _reactTokens.c_tooltip_MaxWidth.value
  };

  var Tooltip =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Tooltip, _React$Component);

    function Tooltip() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Tooltip);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Tooltip)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "storeTippyInstance", function (tip) {
        _this.tip = tip;
      });

      _defineProperty(_assertThisInitialized(_this), "handleEscKeyClick", function (event) {
        if (event.keyCode === _constants.KEY_CODES.ESCAPE_KEY && _this.tip.state.isVisible) {
          _this.tip.hide();
        }
      });

      return _this;
    }

    _createClass(Tooltip, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        document.addEventListener('keydown', this.handleEscKeyClick, false);
      }
    }, {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        document.removeEventListener('keydown', this.handleEscKeyClick, false);
      }
    }, {
      key: "extendChildren",
      value: function extendChildren() {
        return _react2["default"].cloneElement(this.props.children, {
          isAppLauncher: this.props.isAppLauncher
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this$props = this.props,
            position = _this$props.position,
            trigger = _this$props.trigger,
            enableFlip = _this$props.enableFlip,
            children = _this$props.children,
            className = _this$props.className,
            bodyContent = _this$props.content,
            entryDelay = _this$props.entryDelay,
            exitDelay = _this$props.exitDelay,
            appendTo = _this$props.appendTo,
            zIndex = _this$props.zIndex,
            maxWidth = _this$props.maxWidth,
            isAppLauncher = _this$props.isAppLauncher,
            rest = _objectWithoutProperties(_this$props, ["position", "trigger", "enableFlip", "children", "className", "content", "entryDelay", "exitDelay", "appendTo", "zIndex", "maxWidth", "isAppLauncher"]);

        var content = _react2["default"].createElement("div", _extends({
          className: (0, _reactStyles.css)(_tooltipCss2["default"].tooltip, !enableFlip && (0, _reactStyles.getModifier)(_tooltipCss2["default"], position, _tooltipCss2["default"].modifiers.top), className),
          role: "tooltip"
        }, rest), _react2["default"].createElement(_TooltipArrow2["default"], null), _react2["default"].createElement(_TooltipContent2["default"], null, bodyContent));

        return _react2["default"].createElement(_react4["default"], {
          onCreate: this.storeTippyInstance,
          maxWidth: maxWidth,
          zIndex: zIndex,
          appendTo: appendTo,
          content: content,
          lazy: true,
          animateFill: false,
          theme: "pf-tippy",
          performance: true,
          placement: position,
          trigger: trigger,
          delay: [entryDelay, exitDelay],
          distance: 15,
          flip: enableFlip,
          popperOptions: {
            modifiers: {
              preventOverflow: {
                enabled: enableFlip
              },
              hide: {
                enabled: enableFlip
              }
            }
          }
        }, isAppLauncher ? this.extendChildren() : children);
      }
    }]);

    return Tooltip;
  }(_react2["default"].Component);

  Tooltip.propTypes = propTypes;
  Tooltip.defaultProps = defaultProps;
  exports["default"] = Tooltip;
});