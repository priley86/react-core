function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

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
import styles from "../../@patternfly/patternfly/components/AppLauncher/app-launcher.css.js";
import { css } from '@patternfly/react-styles';
import PropTypes from 'prop-types';
import ApplicationLauncherMenu from './ApplicationLauncherMenu';
import Toggle from './Toggle';
import { ThIcon } from '@patternfly/react-icons';
import { ApplicationLauncherDirection, ApplicationLauncherPosition } from './applicationLauncherConstants';
import { DropdownContext } from '../Dropdown/dropdownConstants';
import GenerateId from '../../helpers/GenerateId/GenerateId';
export var propTypes = {
  /** Additional element css classes */
  className: PropTypes.string,

  /** Display menu above or below dropdown toggle */
  direction: PropTypes.oneOf(Object.values(ApplicationLauncherDirection)),

  /** Array of DropdownItem nodes that will be rendered in the dropdown Menu list */
  dropdownItems: PropTypes.array,

  /** open bool */
  isOpen: PropTypes.bool,

  /** Function callback called when user selects item */
  onSelect: PropTypes.func,

  /** Callback called when application launcher toggle is clicked */
  onToggle: PropTypes.func,

  /** Indicates where menu will be alligned horizontally */
  position: PropTypes.oneOf(Object.values(ApplicationLauncherPosition)),

  /** Adds accessible text to the button. Required for plain buttons */
  'aria-label': PropTypes.string
};
export var defaultProps = {
  className: '',
  direction: ApplicationLauncherDirection.down,
  dropdownItems: [],
  isOpen: false,
  onSelect: Function.prototype,
  onToggle: Function.prototype,
  position: ApplicationLauncherPosition.left,
  'aria-label': 'Actions'
};

var ApplicationLauncher =
/*#__PURE__*/
function (_React$Component) {
  _inherits(ApplicationLauncher, _React$Component);

  function ApplicationLauncher() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, ApplicationLauncher);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(ApplicationLauncher)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_this), "onEnter", function () {
      _this.openedOnEnter = true;
    });

    return _this;
  }

  _createClass(ApplicationLauncher, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      if (!this.props.isOpen) this.openedOnEnter = false;
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          ariaLabel = _this$props['aria-label'],
          children = _this$props.children,
          dropdownItems = _this$props.dropdownItems,
          className = _this$props.className,
          isOpen = _this$props.isOpen,
          onSelect = _this$props.onSelect,
          onToggle = _this$props.onToggle,
          props = _objectWithoutProperties(_this$props, ["aria-label", "children", "dropdownItems", "className", "isOpen", "onSelect", "onToggle"]);

      return React.createElement(GenerateId, null, function (randomId) {
        return React.createElement("div", {
          className: css(styles.appLauncher, isOpen && styles.modifiers.expanded, className),
          ref: function ref(_ref) {
            _this2.parentRef = _ref;
          }
        }, Children.map(React.createElement(Toggle, {
          id: "pf-toggle-id-".concat(randomId),
          "aria-label": ariaLabel,
          onToggle: onToggle
        }, React.createElement(ThIcon, null)), function (oneToggle) {
          return cloneElement(oneToggle, {
            parentRef: _this2.parentRef,
            id: randomId,
            isOpen: isOpen,
            isPlain: true,
            'aria-haspopup': true,
            onEnter: _this2.onEnter
          });
        }), isOpen && React.createElement(DropdownContext.Provider, {
          value: function value(event) {
            return onSelect && onSelect(event);
          }
        }, React.createElement(ApplicationLauncherMenu, {
          isOpen: isOpen,
          position: "left",
          "aria-labelledby": ariaLabel,
          openedOnEnter: _this2.openedOnEnter
        }, dropdownItems)));
      });
    }
  }]);

  return ApplicationLauncher;
}(React.Component);

ApplicationLauncher.propTypes = propTypes;
ApplicationLauncher.defaultProps = defaultProps;
export default ApplicationLauncher;