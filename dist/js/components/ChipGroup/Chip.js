"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _reactStyles = require("@patternfly/react-styles");

var _propTypes = _interopRequireDefault(require("prop-types"));

var _ChipButton = _interopRequireDefault(require("./ChipButton"));

var _Tooltip = require("../Tooltip");

var _reactIcons = require("@patternfly/react-icons");

var _chipCss = _interopRequireDefault(require("../../@patternfly/patternfly/components/Chip/chip.css.js"));

var _GenerateId = _interopRequireDefault(require("../../helpers/GenerateId/GenerateId"));

var _componentShape = require("../../helpers/componentShape");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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

    _defineProperty(_assertThisInitialized(_this), "span", _react["default"].createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTooltipVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderOverflowChip", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick,
          Component = _this$props.component;
      return _react["default"].createElement(Component, {
        className: (0, _reactStyles.css)(_chipCss["default"].chip, _chipCss["default"].modifiers.overflow, className)
      }, _react["default"].createElement(_ChipButton["default"], {
        onClick: onClick
      }, _react["default"].createElement("span", {
        className: (0, _reactStyles.css)(_chipCss["default"].chipText)
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
        return _react["default"].createElement(_Tooltip.Tooltip, {
          position: tooltipPosition,
          content: children
        }, _react["default"].createElement(Component, {
          className: (0, _reactStyles.css)(_chipCss["default"].chip, isReadOnly && _chipCss["default"].modifiers.readOnly, className)
        }, _react["default"].createElement("span", {
          ref: _this.span,
          className: (0, _reactStyles.css)(_chipCss["default"].chipText),
          id: randomId
        }, children), !isReadOnly && _react["default"].createElement(_ChipButton["default"], {
          onClick: onClick,
          ariaLabel: closeBtnAriaLabel,
          id: "remove_".concat(randomId),
          "aria-labelledby": "remove_".concat(randomId, " ").concat(randomId)
        }, _react["default"].createElement(_reactIcons.TimesCircleIcon, {
          "aria-hidden": "true"
        }))));
      }

      return _react["default"].createElement(Component, {
        className: (0, _reactStyles.css)(_chipCss["default"].chip, isReadOnly && _chipCss["default"].modifiers.readOnly, className)
      }, _react["default"].createElement("span", {
        ref: _this.span,
        className: (0, _reactStyles.css)(_chipCss["default"].chipText),
        id: randomId
      }, children), !isReadOnly && _react["default"].createElement(_ChipButton["default"], {
        onClick: onClick,
        ariaLabel: closeBtnAriaLabel,
        id: "remove_".concat(randomId),
        "aria-labelledby": "remove_".concat(randomId, " ").concat(randomId)
      }, _react["default"].createElement(_reactIcons.TimesCircleIcon, {
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
      return _react["default"].createElement(_GenerateId["default"], null, function (randomId) {
        return isOverflowChip ? _this2.renderOverflowChip() : _this2.renderChip(randomId);
      });
    }
  }]);

  return Chip;
}(_react["default"].Component);

Chip.propTypes = {
  /** Content rendered inside the chip text */
  children: _propTypes["default"].node,

  /** Aria Label for close button */
  closeBtnAriaLabel: _propTypes["default"].string,

  /** Additional classes added to the chip item */
  className: _propTypes["default"].string,

  /** Flag indicating if the chip has overflow */
  isOverflowChip: _propTypes["default"].bool,

  /** Flag if chip is read only */
  isReadOnly: _propTypes["default"].bool,

  /** Function that is called when clicking on the chip button */
  onClick: _propTypes["default"].func,

  /** Interal flag for which component will be used for chip */
  component: _componentShape.componentShape,

  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition: _propTypes["default"].oneOf(Object.values(_Tooltip.TooltipPosition))
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
var _default = Chip;
exports["default"] = _default;