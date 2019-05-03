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
import styles from "../../@patternfly/patternfly/components/Select/select.css.js";
import { default as checkStyles } from "../../@patternfly/patternfly/components/Check/check.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { SelectContext, KeyTypes } from './selectConstants';
var propTypes = {
  /** the value for the option */
  children: PropTypes.string,

  /** additional classes added to the Select Option */
  className: PropTypes.string,

  /** the value for the option */
  value: PropTypes.string,

  /** flag indicating if the option is disabled */
  isDisabled: PropTypes.bool,

  /** Optional on click callback */
  onClick: PropTypes.func,

  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  value: null,
  isDisabled: false,
  onClick: Function.prototype
};

var CheckboxSelectOption =
/*#__PURE__*/
function (_React$Component) {
  _inherits(CheckboxSelectOption, _React$Component);

  function CheckboxSelectOption() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CheckboxSelectOption);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CheckboxSelectOption)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "ref", React.createRef());

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      if (event.key === KeyTypes.Tab) return;
      event.preventDefault();

      if (event.key === KeyTypes.ArrowUp) {
        _this.props.keyHandler(_this.props.index, 'up');
      } else if (event.key === KeyTypes.ArrowDown) {
        _this.props.keyHandler(_this.props.index, 'down');
      } else if (event.key === KeyTypes.Enter || event.key === KeyTypes.Space) {
        _this.ref.current.click && _this.ref.current.click();

        _this.ref.current.focus();
      }
    });

    return _this;
  }

  _createClass(CheckboxSelectOption, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.props.sendRef(this.ref.current, this.props.index);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          value = _this$props.value,
          onClick = _this$props.onClick,
          isDisabled = _this$props.isDisabled,
          isChecked = _this$props.isChecked,
          sendRef = _this$props.sendRef,
          keyHandler = _this$props.keyHandler,
          index = _this$props.index,
          props = _objectWithoutProperties(_this$props, ["children", "className", "value", "onClick", "isDisabled", "isChecked", "sendRef", "keyHandler", "index"]);

      return React.createElement(SelectContext.Consumer, null, function (_ref) {
        var onSelect = _ref.onSelect;
        return React.createElement("label", _extends({}, props, {
          className: css(checkStyles.check, styles.selectMenuItem, isDisabled && styles.modifiers.disabled, className),
          onKeyDown: _this2.onKeyDown
        }), React.createElement("input", {
          id: value,
          className: css(checkStyles.checkInput),
          type: "checkbox",
          onChange: function onChange(event) {
            if (!isDisabled) {
              onClick && onClick(event);
              onSelect && onSelect(event, value);
            }
          },
          ref: _this2.ref,
          checked: isChecked || false,
          disabled: isDisabled
        }), React.createElement("span", {
          className: css(checkStyles.checkLabel, isDisabled && styles.modifiers.disabled)
        }, value));
      });
    }
  }]);

  return CheckboxSelectOption;
}(React.Component);

CheckboxSelectOption.propTypes = propTypes;
CheckboxSelectOption.defaultProps = defaultProps;
export default CheckboxSelectOption;