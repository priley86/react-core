function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

import React, { Children, cloneElement, Component } from 'react';
import PropTypes from 'prop-types';
import styles from "../../@patternfly/patternfly/components/OptionsMenu/options-menu.css.js";
import { css, getModifier } from '@patternfly/react-styles';
import { OptionsMenuDirection, OptionsMenuPosition } from './optionsMenuConstants';
var propTypes = {
  /** Classes applied to root element of the Options menu */
  className: PropTypes.string,

  /** Id of the root element of the Options menu */
  id: PropTypes.string.isRequired,

  /** Array of OptionsMenuItem and/or OptionMenuItemGroup nodes that will be rendered in the Options menu list */
  menuItems: PropTypes.arrayOf(PropTypes.node).isRequired,

  /** Either an OptionsMenuToggle or an OptionsMenuToggleWithText to use to toggle the Options menu */
  toggle: PropTypes.node.isRequired,

  /** Flag to indicate if menu is open */
  isOpen: PropTypes.bool,

  /** Flag to indicate the toggle has no border or background */
  isPlain: PropTypes.bool,

  /** Provides an accessible name for the Options menu */
  ariaLabelMenu: PropTypes.string,

  /** Display menu above or below Options menu toggle */
  direction: PropTypes.oneOf(Object.values(OptionsMenuDirection)),

  /** Indicates where menu will be aligned horizontally */
  position: PropTypes.oneOf(Object.values(OptionsMenuPosition))
};
var defaultProps = {
  className: '',
  isOpen: false,
  isPlain: false,
  ariaLabelMenu: '',
  direction: OptionsMenuDirection.down,
  position: OptionsMenuPosition.left
};

var OptionsMenu =
/*#__PURE__*/
function (_Component) {
  _inherits(OptionsMenu, _Component);

  function OptionsMenu() {
    _classCallCheck(this, OptionsMenu);

    return _possibleConstructorReturn(this, _getPrototypeOf(OptionsMenu).apply(this, arguments));
  }

  _createClass(OptionsMenu, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          direction = _this$props.direction,
          position = _this$props.position,
          id = _this$props.id,
          isOpen = _this$props.isOpen,
          isPlain = _this$props.isPlain,
          ariaLabelMenu = _this$props.ariaLabelMenu,
          menuItems = _this$props.menuItems,
          toggle = _this$props.toggle;
      return React.createElement("div", {
        id: id,
        className: css(styles.optionsMenu, direction === OptionsMenuDirection.up && getModifier(styles, 'top'), position === OptionsMenuPosition.right && getModifier(styles, 'align-right'), isOpen && getModifier(styles, 'expanded'), className)
      }, Children.map(toggle, function (oneToggle) {
        return cloneElement(oneToggle, {
          parentId: id,
          isOpen: isOpen,
          isPlain: isPlain
        });
      }), isOpen && React.createElement("ul", _extends({
        className: css(styles.optionsMenuMenu, position === OptionsMenuPosition.right && getModifier(styles, 'align-right'))
      }, ariaLabelMenu ? {
        'aria-label': ariaLabelMenu
      } : {
        'aria-labelledby': "".concat(id, "-toggle")
      }), menuItems.map(function (item) {
        return item;
      })));
    }
  }]);

  return OptionsMenu;
}(Component);

OptionsMenu.propTypes = propTypes;
OptionsMenu.defaultProps = defaultProps;
export default OptionsMenu;