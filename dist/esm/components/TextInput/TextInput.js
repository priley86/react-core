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
import styles from "../../@patternfly/patternfly/components/FormControl/form-control.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
var inputTypes = ['text', 'date', 'datetime-local', 'email', 'month', 'number', 'password', 'search', 'tel', 'time', 'url'];
var propTypes = {
  /** Additional classes added to the TextInput. */
  className: PropTypes.string,

  /** Flag to show if the input is required. */
  isRequired: PropTypes.bool,

  /** Type that the input accepts. */
  type: PropTypes.oneOf(inputTypes),

  /** Value of the input. */
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),

  /** Flag to show if the input is valid or invalid. */
  isValid: PropTypes.bool,

  /** Flag to show if the input is disabled. */
  isDisabled: PropTypes.bool,

  /** A callback for when the input value changes. */
  onChange: PropTypes.func,

  /** Flag to show if the input is read only. */
  isReadOnly: PropTypes.bool,

  /** Custom flag to show that the input requires an associated id or aria-label. */
  'aria-label': function ariaLabel(props) {
    if (!props.id && !props['aria-label'] && !props['aria-labelledby']) {
      return new Error('TextInput requires either an id or aria-label to be specified');
    }

    return null;
  },

  /** Additional props are spread to the container <input> */
  '': PropTypes.any
};
var defaultProps = {
  className: '',
  isRequired: false,
  isValid: true,
  isDisabled: false,
  isReadOnly: false,
  type: 'text',
  value: undefined,
  onChange: function onChange() {
    return undefined;
  },
  'aria-label': null
};

var TextInput =
/*#__PURE__*/
function (_React$Component) {
  _inherits(TextInput, _React$Component);

  function TextInput() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, TextInput);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(TextInput)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "handleChange", function (event) {
      _this.props.onChange(event.currentTarget.value, event);
    });

    return _this;
  }

  _createClass(TextInput, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          type = _this$props.type,
          value = _this$props.value,
          onChange = _this$props.onChange,
          isValid = _this$props.isValid,
          isReadOnly = _this$props.isReadOnly,
          isRequired = _this$props.isRequired,
          isDisabled = _this$props.isDisabled,
          props = _objectWithoutProperties(_this$props, ["className", "type", "value", "onChange", "isValid", "isReadOnly", "isRequired", "isDisabled"]);

      return React.createElement("input", _extends({}, props, {
        className: css(styles.formControl, className),
        onChange: this.handleChange,
        type: type,
        value: value,
        "aria-invalid": !isValid,
        required: isRequired,
        disabled: isDisabled,
        readOnly: isReadOnly
      }));
    }
  }]);

  return TextInput;
}(React.Component);

TextInput.propTypes = propTypes;
TextInput.defaultProps = defaultProps;
export default TextInput;