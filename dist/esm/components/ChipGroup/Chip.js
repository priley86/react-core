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

import React from 'react';
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ChipButton from './ChipButton';
import { Tooltip, TooltipPosition } from '../Tooltip';
import { TimesCircleIcon } from '@patternfly/react-icons';
import styles from "../../@patternfly/patternfly/components/Chip/chip.css.js";
import GenerateId from '../../helpers/GenerateId/GenerateId';
import { componentShape } from '../../helpers/componentShape';

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

    _defineProperty(_assertThisInitialized(_this), "span", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "state", {
      isTooltipVisible: false
    });

    _defineProperty(_assertThisInitialized(_this), "renderOverflowChip", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          className = _this$props.className,
          onClick = _this$props.onClick,
          Component = _this$props.component;
      return React.createElement(Component, {
        className: css(styles.chip, styles.modifiers.overflow, className)
      }, React.createElement(ChipButton, {
        onClick: onClick
      }, React.createElement("span", {
        className: css(styles.chipText)
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
        return React.createElement(Tooltip, {
          position: tooltipPosition,
          content: children
        }, React.createElement(Component, {
          className: css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)
        }, React.createElement("span", {
          ref: _this.span,
          className: css(styles.chipText),
          id: randomId
        }, children), !isReadOnly && React.createElement(ChipButton, {
          onClick: onClick,
          ariaLabel: closeBtnAriaLabel,
          id: "remove_".concat(randomId),
          "aria-labelledby": "remove_".concat(randomId, " ").concat(randomId)
        }, React.createElement(TimesCircleIcon, {
          "aria-hidden": "true"
        }))));
      }

      return React.createElement(Component, {
        className: css(styles.chip, isReadOnly && styles.modifiers.readOnly, className)
      }, React.createElement("span", {
        ref: _this.span,
        className: css(styles.chipText),
        id: randomId
      }, children), !isReadOnly && React.createElement(ChipButton, {
        onClick: onClick,
        ariaLabel: closeBtnAriaLabel,
        id: "remove_".concat(randomId),
        "aria-labelledby": "remove_".concat(randomId, " ").concat(randomId)
      }, React.createElement(TimesCircleIcon, {
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
      return React.createElement(GenerateId, null, function (randomId) {
        return isOverflowChip ? _this2.renderOverflowChip() : _this2.renderChip(randomId);
      });
    }
  }]);

  return Chip;
}(React.Component);

Chip.propTypes = {
  /** Content rendered inside the chip text */
  children: PropTypes.node,

  /** Aria Label for close button */
  closeBtnAriaLabel: PropTypes.string,

  /** Additional classes added to the chip item */
  className: PropTypes.string,

  /** Flag indicating if the chip has overflow */
  isOverflowChip: PropTypes.bool,

  /** Flag if chip is read only */
  isReadOnly: PropTypes.bool,

  /** Function that is called when clicking on the chip button */
  onClick: PropTypes.func,

  /** Interal flag for which component will be used for chip */
  component: componentShape,

  /** Position of the tooltip which is displayed if text is longer */
  tooltipPosition: PropTypes.oneOf(Object.values(TooltipPosition))
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
export default Chip;