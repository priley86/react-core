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

import React, { Children, cloneElement } from 'react';
import styles from "../../@patternfly/patternfly/components/Dropdown/dropdown.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import DropdownMenu from './DropdownMenu';
import { DropdownPosition, DropdownDirection, DropdownContext } from './dropdownConstants'; // seed for the aria-labelledby ID

var currentId = 0;
var propTypes = {
  /** Anything which can be rendered in a dropdown */
  children: function children(props) {
    if (props.dropdownItems && props.dropdownItems.length > 0 && props.children) {
      return new Error("Children and dropdownItems props have been provided. Only the dropdownItems prop items will be rendered ");
    }

    return null;
  },

  /** Classes applied to root element of dropdown */
  className: PropTypes.string,

  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,

  /** Flag to indicate if menu is opened */
  isOpen: PropTypes.bool,

  /** Display the toggle with no border or background */
  isPlain: PropTypes.bool,

  /** Indicates where menu will be aligned horizontally */
  position: PropTypes.oneOf(Object.values(DropdownPosition)),

  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(DropdownDirection)),

  /** Placeholder to use custom toggle elements */
  toggle: PropTypes.node.isRequired,

  /** Function callback called when user selects item */
  onSelect: PropTypes.func,

  /** Additional props are spread to the container <div> */
  '': PropTypes.any
};
var defaultProps = {
  children: null,
  className: '',
  dropdownItems: [],
  isOpen: false,
  isPlain: false,
  position: DropdownPosition.left,
  direction: DropdownDirection.down,
  onSelect: Function.prototype
};

var Dropdown =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Dropdown, _React$Component);

  function Dropdown() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Dropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Dropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
      _this.openedOnEnter = true;
    });

    return _this;
  }

  _createClass(Dropdown, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.isOpen) this.openedOnEnter = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          children = _this$props.children,
          className = _this$props.className,
          direction = _this$props.direction,
          dropdownItems = _this$props.dropdownItems,
          isOpen = _this$props.isOpen,
          isPlain = _this$props.isPlain,
          onSelect = _this$props.onSelect,
          position = _this$props.position,
          toggle = _this$props.toggle,
          props = _objectWithoutProperties(_this$props, ["children", "className", "direction", "dropdownItems", "isOpen", "isPlain", "onSelect", "position", "toggle"]);

      var id = toggle.props.id || "pf-toggle-id-".concat(currentId++);
      var component;
      var renderedContent;
      var ariaHasPopup = null;

      if (dropdownItems && dropdownItems.length > 0) {
        component = 'ul';
        renderedContent = dropdownItems;
        ariaHasPopup = true;
      } else {
        component = 'div';
        renderedContent = children;
      }

      return React.createElement("div", _extends({}, props, {
        className: css(styles.dropdown, direction === DropdownDirection.up && styles.modifiers.top, isOpen && styles.modifiers.expanded, className),
        ref: function ref(_ref) {
          _this2.parentRef = _ref;
        }
      }), Children.map(toggle, function (oneToggle) {
        return cloneElement(oneToggle, {
          parentRef: _this2.parentRef,
          isOpen: isOpen,
          id: id,
          isPlain: isPlain,
          ariaHasPopup: ariaHasPopup,
          onEnter: _this2.onEnter
        });
      }), isOpen && React.createElement(DropdownContext.Provider, {
        value: function value(event) {
          return onSelect && onSelect(event);
        }
      }, React.createElement(DropdownMenu, {
        component: component,
        isOpen: isOpen,
        position: position,
        "aria-labelledby": id,
        openedOnEnter: this.openedOnEnter
      }, renderedContent)));
    }
  }]);

  return Dropdown;
}(React.Component);

Dropdown.propTypes = propTypes;
Dropdown.defaultProps = defaultProps;
export default Dropdown;