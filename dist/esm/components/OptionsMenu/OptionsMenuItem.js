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
import { css, getModifier } from '@patternfly/react-styles';
import styles from "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js";
import { CheckIcon } from '@patternfly/react-icons';
import { KEY_CODES } from '../../helpers';
var propTypes = {
  /** Anything which can be rendered as an Options menu item */
  children: PropTypes.node,

  /** Classes applied to root element of an Options menu item */
  className: PropTypes.string,

  /** Render Options menu item as selected */
  isSelected: PropTypes.bool,

  /** Render Options menu item as disabled option */
  isDisabled: PropTypes.bool,

  /** Callback for when this Options menu item is selected */
  onSelect: PropTypes.func,

  /** Unique id of this Options menu item */
  id: PropTypes.string
};
var defaultProps = {
  children: null,
  className: '',
  isSelected: false,
  isDisabled: false,
  onSelect: Function.prototype,
  id: ''
};

var OptionsMenuItem =
/*#__PURE__*/
function (_React$Component) {
  _inherits(OptionsMenuItem, _React$Component);

  function OptionsMenuItem() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, OptionsMenuItem);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(OptionsMenuItem)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onKeyDown", function (event) {
      // Detected key press on this item, notify the menu parent so that the appropriate
      // item can be focused
      if (event.keyCode === KEY_CODES.TAB) return;
      event.preventDefault();

      if (event.keyCode === KEY_CODES.ENTER) {
        _this.props.onSelect(event);
      }
    });

    return _this;
  }

  _createClass(OptionsMenuItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onSelect = _this$props.onSelect,
          isDisabled = _this$props.isDisabled,
          isSelected = _this$props.isSelected,
          className = _this$props.className,
          children = _this$props.children,
          id = _this$props.id,
          props = _objectWithoutProperties(_this$props, ["onSelect", "isDisabled", "isSelected", "className", "children", "id"]);

      return React.createElement("li", null, React.createElement("button", _extends({
        className: css(styles.optionsMenuMenuItem, isDisabled && getModifier(styles, 'disabled'), className),
        "aria-disabled": isDisabled,
        onClick: onSelect,
        onKeyDown: this.onKeyDown,
        "aria-selected": isSelected,
        id: id
      }, props), children, React.createElement("i", {
        className: css(styles.optionsMenuMenuItemIcon),
        "aria-hidden": true,
        hidden: !isSelected
      }, React.createElement(CheckIcon, null))));
    }
  }]);

  return OptionsMenuItem;
}(React.Component);

OptionsMenuItem.propTypes = propTypes;
OptionsMenuItem.defaultProps = defaultProps;
export default OptionsMenuItem;