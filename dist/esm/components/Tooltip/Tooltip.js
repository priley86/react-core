function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }

function _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

import React from 'react';
import PropTypes from 'prop-types';
import Tippy from '@tippy.js/react';
import styles from "../../@patternfly/patternfly/components/Tooltip/tooltip.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import TooltipArrow from './TooltipArrow';
import TooltipContent from './TooltipContent';
import { KEY_CODES } from '../../helpers/constants';
import { c_tooltip_MaxWidth as tooltipMaxWidth } from '@patternfly/react-tokens';
import { tippyStyles } from './styles';
tippyStyles();
export var TooltipPosition = {
  top: 'top',
  bottom: 'bottom',
  left: 'left',
  right: 'right'
};
var propTypes = {
  /** Tooltip position */
  position: PropTypes.oneOf(Object.keys(TooltipPosition).map(function (key) {
    return TooltipPosition[key];
  })),

  /** Tooltip trigger: click, mouseenter, focus */
  trigger: PropTypes.string,

  /** If true, tries to keep the tooltip in view by flipping it if necessary */
  enableFlip: PropTypes.bool,

  /** Tooltip additional class */
  className: PropTypes.string,

  /** Tooltip content */
  content: PropTypes.node.isRequired,

  /** The reference element to which the tooltip is relatively placed to */
  children: PropTypes.element.isRequired,

  /** Delay in ms before the tooltip appears */
  entryDelay: PropTypes.number,

  /** Delay in ms before the tooltip disappears */
  exitDelay: PropTypes.number,

  /** The element to append the tooltip to, defaults to body */
  appendTo: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),

  /** z-index of the tooltip */
  zIndex: PropTypes.number,

  /** Maximum width of the tooltip (default 12.5rem) */
  maxWidth: PropTypes.string
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
  maxWidth: tooltipMaxWidth && tooltipMaxWidth.value
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
      if (event.keyCode === KEY_CODES.ESCAPE_KEY && _this.tip.state.isVisible) {
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
      return React.cloneElement(this.props.children, {
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

      var content = React.createElement("div", _extends({
        className: css(styles.tooltip, !enableFlip && getModifier(styles, position, styles.modifiers.top), className),
        role: "tooltip"
      }, rest), React.createElement(TooltipArrow, null), React.createElement(TooltipContent, null, bodyContent));
      return React.createElement(Tippy, {
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
}(React.Component);

Tooltip.propTypes = propTypes;
Tooltip.defaultProps = defaultProps;
export default Tooltip;