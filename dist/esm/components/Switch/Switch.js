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
import styles from "../../@patternfly/patternfly/components/Switch/switch.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { getUniqueId } from '../../helpers/util';
import { CheckIcon } from '@patternfly/react-icons';
var propTypes = {
  /** id for the label. */
  id: PropTypes.string,

  /** Additional classes added to the Switch */
  className: PropTypes.string,

  /** Text value for the label */
  label: PropTypes.string,

  /** Flag to show if the Switch is checked. */
  isChecked: PropTypes.bool,

  /** Flag to show if the Switch is disabled. */
  isDisabled: PropTypes.bool,

  /** A callback for when the Switch selection changes. (isChecked, event) => {} */
  onChange: PropTypes.func,

  /** Adds accessible text to the Switch, and should describe the isChecked="true" state. When label is defined, aria-label should be set to the text string that is visible when isChecked is true. */
  'aria-label': function ariaLabel(props) {
    if (!props.id && !props['aria-label']) {
      return new Error('Switch requires either an id or aria-label to be specified');
    }
  },

  /** Additional props are spread to the container <input> */
  '': PropTypes.any
};
var defaultProps = {
  id: '',
  className: '',
  label: '',
  isChecked: true,
  isDisabled: false,
  onChange: function onChange() {
    return undefined;
  },
  'aria-label': ''
};

var Switch =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Switch, _React$Component);

  function Switch() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Switch);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Switch)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "id", _this.props.id || getUniqueId());

    return _this;
  }

  _createClass(Switch, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          className = _this$props.className,
          label = _this$props.label,
          isChecked = _this$props.isChecked,
          isDisabled = _this$props.isDisabled,
          _onChange = _this$props.onChange,
          props = _objectWithoutProperties(_this$props, ["id", "className", "label", "isChecked", "isDisabled", "onChange"]);

      return React.createElement("label", {
        className: css(styles["switch"], className),
        htmlFor: this.id
      }, React.createElement("input", _extends({}, props, {
        id: this.id,
        className: css(styles.switchInput),
        type: "checkbox",
        onChange: function onChange(event) {
          return _onChange(event.currentTarget.checked, event);
        },
        checked: isChecked,
        disabled: isDisabled
      })), label !== '' ? React.createElement(React.Fragment, null, React.createElement("span", {
        className: css(styles.switchToggle)
      }), React.createElement("span", {
        className: css(styles.switchLabel, styles.modifiers.on),
        "aria-hidden": "true"
      }, label), React.createElement("span", {
        className: css(styles.switchLabel, styles.modifiers.off),
        "aria-hidden": "true"
      }, label)) : React.createElement("span", {
        className: css(styles.switchToggle)
      }, React.createElement("div", {
        className: css(styles.switchToggleIcon),
        "aria-hidden": "true"
      }, React.createElement(CheckIcon, {
        noVerticalAlign: true
      }))));
    }
  }]);

  return Switch;
}(React.Component);

Switch.propTypes = propTypes;
Switch.defaultProps = defaultProps;
export default Switch;