"use strict";

(function (global, factory) {
  if (typeof define === "function" && define.amd) {
    define(["exports", "react", "@patternfly/react-styles", "prop-types", "./ChipButton", "../Tooltip", "@patternfly/react-icons", "../../@patternfly/patternfly/components/Chip/chip.css.js", "../../helpers/GenerateId/GenerateId", "../../helpers/componentShape"], factory);
  } else if (typeof exports !== "undefined") {
    factory(exports, require("react"), require("@patternfly/react-styles"), require("prop-types"), require("./ChipButton"), require("../Tooltip"), require("@patternfly/react-icons"), require("../../@patternfly/patternfly/components/Chip/chip.css.js"), require("../../helpers/GenerateId/GenerateId"), require("../../helpers/componentShape"));
  } else {
    var mod = {
      exports: {}
    };
    factory(mod.exports, global.react, global.reactStyles, global.propTypes, global.ChipButton, global.Tooltip, global.reactIcons, global.chipCss, global.GenerateId, global.componentShape);
    global.undefined = mod.exports;
  }
})(void 0, function (exports, _react, _reactStyles, _propTypes, _ChipButton, _Tooltip, _reactIcons, _chipCss, _GenerateId, _componentShape) {
  "use strict";

  Object.defineProperty(exports, "__esModule", {
    value: true
  });

  var _react2 = _interopRequireDefault(_react);

  var _propTypes2 = _interopRequireDefault(_propTypes);

  var _ChipButton2 = _interopRequireDefault(_ChipButton);

  var _chipCss2 = _interopRequireDefault(_chipCss);

  var _GenerateId2 = _interopRequireDefault(_GenerateId);

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

  var Chip =
  /*#__PURE__*/
  function (_React$Component) {
    _inherits(Chip, _React$Component);

    function Chip() {
      var _getPrototypeOf2;

      var _this;

      _classCallCheck(this, Chip);

      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }

      _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Chip)).call.apply(_getPrototypeOf2, [this].concat(args)));

      _defineProperty(_assertThisInitialized(_this), "span", _react2["default"].createRef());

      _defineProperty(_assertThisInitialized(_this), "state", {
        isTooltipVisible: false
      });

      _defineProperty(_assertThisInitialized(_this), "renderOverflowChip", function () {
        var _this$props = _this.props,
            children = _this$props.children,
            className = _this$props.className,
            onClick = _this$props.onClick,
            Component = _this$props.component;
        return _react2["default"].createElement(Component, {
          className: (0, _reactStyles.css)(_chipCss2["default"].chip, _chipCss2["default"].modifiers.overflow, className)
        }, _react2["default"].createElement(_ChipButton2["default"], {
          onClick: onClick
        }, _react2["default"].createElement("span", {
          className: (0, _reactStyles.css)(_chipCss2["default"].chipText)
        }, children)));
      });

      _defineProperty(_assertThisInitialized(_this), "renderChip", function (randomId) {
        var _this$props2 = _this.props,
            children = _this$props2.children,
            closeBtnAriaLabel = _this$props2.closeBtnAriaLabel,
            tooltipPosition = _this$props2.tooltipPosition,
            className = _this$props2.className,
            Component = _this$props2.component,
            onClick = _this$props2.onClick,
            isReadOnly = _this$props2.isReadOnly;

        if (_this.state.isTooltipVisible) {
          return _react2["default"].createElement(_Tooltip.Tooltip, {
            position: tooltipPosition,
            content: children
          }, _react2["default"].createElement(Component, {
            className: (0, _reactStyles.css)(_chipCss2["default"].chip, isReadOnly && _chipCss2["default"].modifiers.readOnly, className)
          }, _react2["default"].createElement("span", {
            ref: _this.span,
            className: (0, _reactStyles.css)(_chipCss2["default"].chipText),
            id: randomId
          }, children), !isReadOnly && _react2["default"].createElement(_ChipButton2["default"], {
            onClick: onClick,
            ariaLabel: closeBtnAriaLabel,
            id: "remove_".concat(randomId),
            "aria-labelledby": "remove_".concat(randomId, " ").concat(randomId)
          }, _react2["default"].createElement(_reactIcons.TimesCircleIcon, {
            "aria-hidden": "true"
          }))));
        }

        return _react2["default"].createElement(Component, {
          className: (0, _reactStyles.css)(_chipCss2["default"].chip, isReadOnly && _chipCss2["default"].modifiers.readOnly, className)
        }, _react2["default"].createElement("span", {
          ref: _this.span,
          className: (0, _reactStyles.css)(_chipCss2["default"].chipText),
          id: randomId
        }, children), !isReadOnly && _react2["default"].createElement(_ChipButton2["default"], {
          onClick: onClick,
          ariaLabel: closeBtnAriaLabel,
          id: "remove_".concat(randomId),
          "aria-labelledby": "remove_".concat(randomId, " ").concat(randomId)
        }, _react2["default"].createElement(_reactIcons.TimesCircleIcon, {
          "aria-hidden": "true"
        })));
      });

      return _this;
    }

    _createClass(Chip, [{
      key: "componentDidMount",
      value: function componentDidMount() {
        this.setState({
          isTooltipVisible: this.span.current && this.span.current.offsetWidth < this.span.current.scrollWidth
        });
      }
    }, {
      key: "render",
      value: function render() {
        var _this2 = this;

        var isOverflowChip = this.props.isOverflowChip;
        return _react2["default"].createElement(_GenerateId2["default"], null, function (randomId) {
          return isOverflowChip ? _this2.renderOverflowChip() : _this2.renderChip(randomId);
        });
      }
    }]);

    return Chip;
  }(_react2["default"].Component);

  Chip.propTypes = {
    /** Content rendered inside the chip text */
    children: _propTypes2["default"].node,

    /** Aria Label for close button */
    closeBtnAriaLabel: _propTypes2["default"].string,

    /** Additional classes added to the chip item */
    className: _propTypes2["default"].string,

    /** Flag indicating if the chip has overflow */
    isOverflowChip: _propTypes2["default"].bool,

    /** Flag if chip is read only */
    isReadOnly: _propTypes2["default"].bool,

    /** Function that is called when clicking on the chip button */
    onClick: _propTypes2["default"].func,

    /** Interal flag for which component will be used for chip */
    component: _componentShape.componentShape,

    /** Position of the tooltip which is displayed if text is longer */
    tooltipPosition: _propTypes2["default"].oneOf(Object.values(_Tooltip.TooltipPosition))
  };
  Chip.defaultProps = {
    children: null,
    closeBtnAriaLabel: 'close',
    className: '',
    isOverflowChip: false,
    isReadOnly: false,
    tooltipPosition: 'top',
    onClick: function onClick() {},
    component: 'div'
  };
  exports["default"] = Chip;
});