function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

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

import React, { Component } from 'react';
import styles from "../../@patternfly/patternfly/components/Progress/progress.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ProgressContainer, { ProgressMeasureLocation, ProgressVariant } from './ProgressContainer';
import { getUniqueId } from '../../helpers/util';
export var ProgressSize = {
  sm: 'sm',
  md: 'md',
  lg: 'lg'
};
var propTypes = {
  /** Classname for progress component. */
  className: PropTypes.string,

  /** Size variant of progress. */
  size: PropTypes.oneOf(Object.values(ProgressSize)),

  /** Where the measure percent will be located. */
  measureLocation: PropTypes.oneOf(Object.values(ProgressMeasureLocation)),

  /** Status variant of progress. */
  variant: PropTypes.oneOf(Object.values(ProgressVariant)),

  /** Title above progress. */
  title: PropTypes.string,

  /** Text description of current progress value to display instead of
   * percentage. */
  label: PropTypes.node,

  /** Actual value of progress. */
  value: PropTypes.number,

  /** DOM id for progress component. */
  id: PropTypes.string,

  /** Minimal value of progress. */
  min: PropTypes.number,

  /** Maximum value of progress. */
  max: PropTypes.number,

  /** Accessible text description of current progress value, for when value is
   * not a percentage. Use with label. */
  valueText: PropTypes.string,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  measureLocation: ProgressMeasureLocation.top,
  variant: ProgressVariant.info,
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

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || getUniqueId());

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
      return React.createElement("div", _extends({}, additionalProps, {
        className: css(styles.progress, getModifier(styles, variant, ''), getModifier(styles, measureLocation, ''), getModifier(styles, measureLocation === ProgressMeasureLocation.inside ? ProgressSize.lg : size, ''), !title && getModifier(styles, 'singleline', ''), className),
        id: this.id,
        role: "progressbar"
      }), React.createElement(ProgressContainer, {
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
}(Component);

Progress.propTypes = propTypes;
Progress.defaultProps = defaultProps;
export default Progress;