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

import React, { Component } from 'react';
import styles from "../../@patternfly/patternfly/components/Select/select.css.js";
import buttonStyles from "../../@patternfly/patternfly/components/Button/button.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import { CaretDownIcon } from '@patternfly/react-icons';
import { KeyTypes, SelectVariant } from './selectConstants';
var propTypes = {
  /** HTML ID of dropdown toggle */
  id: PropTypes.string.isRequired,

  /** Anything which can be rendered as dropdown toggle */
  children: PropTypes.node,

  /** Classes applied to root element of dropdown toggle */
  className: PropTypes.string,

  /** Flag to indicate if select is expanded */
  isExpanded: PropTypes.bool,

  /** Callback called when toggle is clicked */
  onToggle: PropTypes.func,

  /** Callback for toggle open on keyboard entry */
  onEnter: PropTypes.func,

  /** Callback for toggle close */
  onClose: PropTypes.func,

  /** Element which wraps toggle */
  parentRef: PropTypes.any,

  /** Forces focus state */
  isFocused: PropTypes.bool,

  /** Forces hover state */
  isHovered: PropTypes.bool,

  /** Forces active state */
  isActive: PropTypes.bool,

  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,

  /** Type of the toggle button, defaults to 'button' */
  type: PropTypes.string,

  /** Id of label for the Select aria-labelledby */
  ariaLabelledBy: PropTypes.string,

  /** Label for toggle of select variants */
  ariaLabelToggle: PropTypes.string,

  /** Flag for variant, determines toggle rules and interaction */
  variant: PropTypes.oneOf(['single', 'checkbox', 'typeahead', 'typeaheadmulti']),

  /** Additional props are spread to the container <button> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  isExpanded: false,
  parentRef: null,
  isFocused: false,
  isHovered: false,
  isActive: false,
  isPlain: false,
  variant: false,
  ariaLabelledBy: null,
  ariaLabelToggle: null,
  type: 'button',
  onToggle: Function.prototype,
  onEnter: Function.prototype,
  onClose: Function.prototype
};

var SelectToggle =
/*#__PURE__*/
function (_Component) {
  _inherits(SelectToggle, _Component);

  function SelectToggle() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, SelectToggle);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(SelectToggle)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onDocClick", function (event) {
      var _this$props = _this.props,
          parentRef = _this$props.parentRef,
          isExpanded = _this$props.isExpanded,
          onToggle = _this$props.onToggle,
          onClose = _this$props.onClose;

      if (isExpanded && parentRef && !parentRef.contains(event.target)) {
        onToggle && onToggle(false);
        onClose && onClose();

        _this.toggle.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onEscPress", function (event) {
      var _this$props2 = _this.props,
          parentRef = _this$props2.parentRef,
          isExpanded = _this$props2.isExpanded,
          variant = _this$props2.variant,
          onToggle = _this$props2.onToggle,
          onClose = _this$props2.onClose;
      if (event.key === KeyTypes.Tab && variant === SelectVariant.checkbox) return;

      if (isExpanded && (event.key === KeyTypes.Escape || event.key === KeyTypes.Tab) && parentRef && parentRef.contains(event.target)) {
        onToggle && onToggle(false);
        onClose && onClose();

        _this.toggle.focus();
      }
    });

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      var _this$props3 = _this.props,
          isExpanded = _this$props3.isExpanded,
          onToggle = _this$props3.onToggle,
          variant = _this$props3.variant,
          onClose = _this$props3.onClose,
          onEnter = _this$props3.onEnter;
      if (event.key === KeyTypes.Tab && variant === SelectVariant.checkbox || event.key === KeyTypes.Tab && !isExpanded || event.key !== KeyTypes.Enter && event.key !== KeyTypes.Space || (event.key === KeyTypes.Space || event.key === KeyTypes.Enter) && (variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti)) return;
      event.preventDefault();

      if ((event.key === KeyTypes.Tab || event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && isExpanded) {
        onToggle && onToggle(!isExpanded);
        onClose && onClose();

        _this.toggle.focus();
      } else if ((event.key === KeyTypes.Enter || event.key === KeyTypes.Space) && !isExpanded) {
        onToggle(!isExpanded);
        onEnter();
      }
    });

    return _this;
  }

  _createClass(SelectToggle, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('mousedown', this.onDocClick);
      document.addEventListener('touchstart', this.onDocClick);
      document.addEventListener('keydown', this.onEscPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('mousedown', this.onDocClick);
      document.removeEventListener('touchstart', this.onDocClick);
      document.removeEventListener('keydown', this.onEscPress);
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props4 = this.props,
          className = _this$props4.className,
          children = _this$props4.children,
          isExpanded = _this$props4.isExpanded,
          isFocused = _this$props4.isFocused,
          isActive = _this$props4.isActive,
          isHovered = _this$props4.isHovered,
          isPlain = _this$props4.isPlain,
          variant = _this$props4.variant,
          onToggle = _this$props4.onToggle,
          onEnter = _this$props4.onEnter,
          onClose = _this$props4.onClose,
          parentRef = _this$props4.parentRef,
          id = _this$props4.id,
          type = _this$props4.type,
          ariaLabelledBy = _this$props4.ariaLabelledBy,
          ariaLabelToggle = _this$props4.ariaLabelToggle,
          props = _objectWithoutProperties(_this$props4, ["className", "children", "isExpanded", "isFocused", "isActive", "isHovered", "isPlain", "variant", "onToggle", "onEnter", "onClose", "parentRef", "id", "type", "ariaLabelledBy", "ariaLabelToggle"]);

      var isTypeahead = variant === SelectVariant.typeahead || variant === SelectVariant.typeaheadMulti;
      var ToggleComponent = isTypeahead ? 'div' : 'button';
      var toggleProps = {
        id: id,
        'aria-labelledby': ariaLabelledBy,
        'aria-expanded': isExpanded,
        'aria-haspopup': variant !== SelectVariant.checkbox && 'listbox' || null
      };
      return React.createElement(ToggleComponent, _extends({}, props, {
        ref: function ref(toggle) {
          _this2.toggle = toggle;
        },
        className: css(styles.selectToggle, isFocused && styles.modifiers.focus, isHovered && styles.modifiers.hover, isActive && styles.modifiers.active, isPlain && styles.modifiers.plain, isTypeahead && styles.modifiers.typeahead, className),
        type: !isTypeahead ? type : null,
        onClick: function onClick(_event) {
          if (isTypeahead) onToggle && onToggle(true);else {
            onToggle && onToggle(!isExpanded);
            if (isExpanded) onClose && onClose();
          }
        },
        onKeyDown: this.onKeyDown
      }, !isTypeahead && toggleProps), children, isTypeahead && React.createElement("button", _extends({
        className: css(buttonStyles.button, styles.selectToggleButton)
      }, isTypeahead && toggleProps, {
        "aria-label": ariaLabelToggle,
        onClick: function onClick(_event) {
          _event.stopPropagation();

          onToggle && onToggle(!isExpanded);
          if (isExpanded) onClose && onClose();
        }
      }), React.createElement(CaretDownIcon, {
        className: css(styles.selectToggleArrow)
      })), !isTypeahead && React.createElement(CaretDownIcon, {
        className: css(styles.selectToggleArrow)
      }));
    }
  }]);

  return SelectToggle;
}(Component);

SelectToggle.propTypes = propTypes;
SelectToggle.defaultProps = defaultProps;
export default SelectToggle;